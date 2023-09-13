# [Traccar Manager for iOS and Android](https://www.traccar.org)

## Overview

Forked traccar-web and added [Capacitor](https://github.com/ionic-team/capacitor).

Uses native web requests and native web sockets.

Check [here](https://capacitorjs.com/docs/getting-started/environment-setup) for requirements

## Start
```
cd modern
npm install
export REACT_APP_URL_NAME=YOUR_TRACCAR_SERVER_HOST && npm run build
npx cap add ios
npx cap add android
```
Xcode
```
npx cap open ios
```

Android Studio
```
npx cap open android
```


## License

Modern app uses Apache License, Version 2.0 license.
Legacy app uses The GNU General Public License v3.0 license.
