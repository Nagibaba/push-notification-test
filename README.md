# push-notification-test

1. `npm i`
   
2. `npm serve` to start the frontend server

3. Push notifications can be triggered as soon as we subscribe, take the json value and add it to `pushSubscription` variable inside `webpush.js`
We then use this value to push the notification to the user exclusively. Run `node webpush.js`
