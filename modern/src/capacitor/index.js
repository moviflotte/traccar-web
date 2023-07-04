import { Capacitor, CapacitorHttp } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';

export default function Init() {
  const oldFetch = window.fetch;
  window.fetch = async (url, options) => {
    if (typeof url === 'string' && url.startsWith('/')) {
      url = `https://${process.env.REACT_APP_URL_NAME}${url}`;
      if (Capacitor.getPlatform() === 'ios') {
        try {
          const response = await CapacitorHttp.request({
            url,
            webFetchExtra: {
              credentials: 'include',
            },
            ...(options ? {
              data: options.body && options.body.toString(),
              headers: options.headers,
            } : {}),
            ...options,
          });
          if (response.headers['Set-Cookie']) {
            await Preferences.set({
              key: 'cookie',
              value: response.headers['Set-Cookie'].substring(0, response.headers['Set-Cookie'].indexOf(';')),
            });
          }
          return new Response(JSON.stringify(response.data), {
            headers: response.headers,
            status: response.status,
          });
        } catch (e) {
          return new Response(e.message, {
            status: 500,
          });
        }
      }
      return oldFetch(url, { ...options, credentials: 'include' });
    }
    return oldFetch(url, options);
  };
}
