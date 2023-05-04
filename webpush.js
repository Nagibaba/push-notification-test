const webpush = require('web-push')
// const vapidKeys = webpush.generateVAPIDKeys();
//  console.log(vapidKeys)
// VAPID keys should only be generated only once.
const vapidKeys = {
    publicKey:
        'BEpETmfdXZZzjHQ8Y3FN75ZFokE26XIH77IRbD05bBCt8An_jUy-AZpdXhS32trf8V58MXKS1PeQ6JbBeJBzUNM',
    privateKey: 'I6sw6wAdZ3KoG9vmEe7aycAnWoDxemnkusTPz51IRqg',
}

webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
    endpoint:
        'https://fcm.googleapis.com/fcm/send/dcSNPwMprDU:APA91bGbRAcrGyO34RtiQOqvJ0lSp0rfRv1nTIbc8mGlzZj8ZZLqCiTEUPMkCinrcggtXLGtL5QAj-oMOeHgW401LVB5nwdP6cQBLZYBagFIG9Tc4FmIiZjuSUL3cGX5U5kAyr21xIfk',
    expirationTime: null,
    keys: {
        p256dh: 'BC6LZYlSDRYvC2AgPFmVEfUBpE2hHg5x3jk9B6fyj_8wgzg9a9Xu185MHgStohlm1TMq1A9x8LwJBY66H26p41I',
        auth: 'LYtwmUrDR-SewEfGOzcHDA',
    },
}

webpush.sendNotification(pushSubscription, 'Your Push Payload Text')
