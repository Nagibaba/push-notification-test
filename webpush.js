const webpush = require('web-push')
// const vapidKeys = webpush.generateVAPIDKeys();
// VAPID keys should only be generated only once.
// Use the code below to generate one
const vapidKeys = {
    publicKey:
        'BEpETmfdXZZzjHQ8Y3FN75ZFokE26XIH77IRbD05bBCt8An_jUy-AZpdXhS32trf8V58MXKS1PeQ6JbBeJBzUNM',
    privateKey: 'I6sw6wAdZ3KoG9vmEe7aycAnWoDxemnkusTPz51IRqg',
}

// Note that we also included a "mailto:" string.
// This string needs to be either a URL or a mailto email address.
// This piece of information will actually be sent to the web push service as part of the request to trigger a push.
// The reason this is done is so that if a web push service needs to get in touch with the sender, they have some information that will enable them to.
webpush.setVapidDetails(
    'mailto:bnagiyev@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

// This object is returned from frontend
// by sw.pushManager.subscribe function
const pushSubscription = {
    endpoint:
        'https://fcm.googleapis.com/fcm/send/fykGybCME2c:APA91bEjifLnSDGONbRRRIssJwGQR2ECyNeT3-WDa5M0S1Pj3a_XE1byL4wvbRdv5BTTc-Och7-D7K9i0ykHU0QV9TzC6HGhVudnz_PP_PaYujryQxiXLTsMCz0KFm-lG41rHqF0buVx',
    expirationTime: null,
    keys: {
        p256dh: 'BP8G6GCeWnRtm7XuvqCgVP_fLiDBzlHNWEZG6X9SebYwIZpgeSCMNiQgpJthL1vVlOTVMmscxWMOLzLzp-c2Xzc',
        auth: 'xQ6ZHSC-oi7ojBZeUl7NZQ',
    },
}

const message = {
    title: 'New Drop',
    body: 'hey Check this bottle 2',
    url: 'https://google.com',
}
webpush.sendNotification(pushSubscription, JSON.stringify(message))
