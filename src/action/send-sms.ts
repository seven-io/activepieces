import { createAction, Property } from '@activepieces/pieces-framework';
import { callSevenApi } from '../common';
import { HttpMethod } from '@activepieces/pieces-common';
import { sevenAuth } from '../index';

export const sevenSendSms = createAction({
  auth: sevenAuth,
  name: 'send_sms',
  description: 'Send a new SMS message',
  displayName: 'Send SMS',
  props: {
    from: Property.ShortText({
      displayName: 'From',
      required: false
    }),
    text: Property.ShortText({
      description: 'The body of the message to send',
      displayName: 'Message Body',
      required: true
    }),
    to: Property.Array({
      description: 'The phone numbers to send the message to',
      displayName: 'To',
      required: true
    })
  },
  async run(context) {
    const { text, to, from } = context.propsValue;

    return await callSevenApi({
      body: {
        from,
        text,
        to
      },
      method: HttpMethod.POST
    }, 'sms', context.auth as string);

  }
});
