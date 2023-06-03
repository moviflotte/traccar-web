import { Capacitor, CapacitorHttp } from '@capacitor/core';

export default function Init() {
  if (Capacitor.isNativePlatform()) {
    const oldFetch = window.fetch;
    window.fetch = async (url, options) => {
      if (typeof url === 'string' && url.startsWith('/')) {
        url = `https://${process.env.REACT_APP_URL_NAME}${url}`;
        try {
          const response = await CapacitorHttp.request({
            url,
            webFetchExtra: {
              credentials: 'include',
            },
            ...(options ? {
              data: options.body.toString(),
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            } : {}),
            ...options,
          });
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
      return oldFetch(url, options);
    };
  }
}
