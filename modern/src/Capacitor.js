import { Capacitor } from '@capacitor/core';

export default function Init() {
  if (Capacitor.isNativePlatform()) {
    const oldFetch = window.fetch;
    window.fetch = (url, params) => {
      if (typeof url === 'string' && url.startsWith('/')) {
        return oldFetch(
          `https://${process.env.REACT_APP_URL_NAME}${url}`,
          {
            ...params,
            credentials: 'include',
          },
        );
      }
      return oldFetch(url, params);
    };
  }
}
