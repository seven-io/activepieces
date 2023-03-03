import { createPiece, PieceAuth } from '@activepieces/pieces-framework';
import { sevenSendSms } from './action/send-sms';
import { sevenNewIncomingSms } from './trigger/new-incoming-sms';

export const sevenAuth = PieceAuth.SecretText({
  description: 'The authentication to use to connect to seven',
  displayName: 'API key',
  required: true
});

export const seven = createPiece({
  actions: [sevenSendSms],
  auth: sevenAuth,
  authors: ['seven-io'],
  displayName: 'seven',
  logoUrl: 'https://www.seven.io/wp-content/uploads/icon-green-bold.png',
  triggers: [sevenNewIncomingSms]
});
