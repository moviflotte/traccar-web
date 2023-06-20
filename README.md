# [Traccar Manager for iOS and Android](https://www.traccar.org)

## Overview

Traccar Manager using [Capacitor](https://github.com/ionic-team/capacitor).

Uses native web requests and native web sockets.

## Start
```
cd modern
npm install
export REACT_APP_URL_NAME=YOUR_TRACCAR_SERVER_HOST && npm run build
npx cap add ios
npx cap add android
npx cap copy
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
