import {
  httpClient,
  type HttpResponse,
  HttpRequest
} from '@activepieces/pieces-common';

export const callSevenApi = async <T>(
  httpRequest: Omit<HttpRequest, 'url'>,
  path: string,
  apiKey: string
): Promise<HttpResponse<T>> => {
  return await httpClient.sendRequest<T>({
    ...httpRequest,
    headers: {
      ...httpRequest.headers,
      'Content-Type': 'application/x-www-form-urlencoded',
      SentWith: 'Activepieces',
      'X-Api-Key': apiKey
    },
    url: `https://gateway.seven.io/api/${path}`
  });
};
