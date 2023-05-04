const webpush = require('web-push');
// const vapidKeys = webpush.generateVAPIDKeys();
//  console.log(vapidKeys)
// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey: 'BEpETmfdXZZzjHQ8Y3FN75ZFokE26XIH77IRbD05bBCt8An_jUy-AZpdXhS32trf8V58MXKS1PeQ6JbBeJBzUNM',
  privateKey: 'I6sw6wAdZ3KoG9vmEe7aycAnWoDxemnkusTPz51IRqg'
}

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: '.....',
  keys: {
    auth: '.....',
    p256dh: '.....'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
