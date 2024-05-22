import {
  createTrigger, Property,
  TriggerStrategy
} from '@activepieces/pieces-framework';
import { callSevenApi } from '../common';
import { sevenAuth } from '../index';
import { HttpMethod } from '@activepieces/pieces-common';

const triggerNameInStore = 'seven_new_sms_trigger';

export const smsInbound = createTrigger({
  auth: sevenAuth,
  name: 'new_incoming_sms',
  description: 'Triggers when a new SMS message is received',
  displayName: 'New Incoming SMS',
  props: {
    from: Property.ShortText({
      displayName: 'From',
      required: false
    })
  },
  sampleData: {
    'data': {
      'id': '681590',
      'sender': 'SMS',
      'system': '491771783130',
      'text': 'Hello. I am an example for demonstrating a webhook payload.',
      'time': '1605878104'
    },
    'webhook_event': 'sms_mo',
    'webhook_timestamp': '2020-12-02 11:55:44'
  },
  type: TriggerStrategy.WEBHOOK,
  async onEnable(context) {
    const { from } = context.propsValue;
    const { body } = await callSevenApi<SubscribeHookResponse>({
      body: {
        action: 'subscribe',
        event_filter: from,
        event_type: 'sms_mo',
        target_url: context.webhookUrl
      },
      method: HttpMethod.POST
    }, 'hooks', context.auth as string);

    if (!body.success) return;

    await context.store?.put<SevenWebhookInformation>(triggerNameInStore, {
      webhookId: body.id!
    });
  },
  async onDisable(context) {
    const info = await context.store?.get<SevenWebhookInformation>(triggerNameInStore);
    if (!info) return;

    const { body } = await callSevenApi<UnsubscribeHookResponse>({
      body: {
        action: 'unsubscribe',
        id: info.webhookId
      },
      method: HttpMethod.POST
    }, 'hooks', context.auth as string);

    if (!body.success) return;

    await context.store.put(triggerNameInStore, null);
  },
  async run(context) {
    return [context.payload.body];
  }
});

interface SubscribeHookResponse {
  id: number | null;
  success: boolean;
}

interface UnsubscribeHookResponse {
  success: boolean;
}

interface SevenWebhookInformation {
  webhookId: number;
}
