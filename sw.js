let urlDefault = 'https://winechain.co/drops'

self.addEventListener('push', function (event) {
    const { title, url, ...data } = event.data.json()

    if (url) urlDefault = url

    const options = {
        icon: './logo.png',
        body: 'Click to buy',
        sound: './bottle.mp3', // not supported yet

        ...data,
    }
    const promiseChain = self.registration.showNotification(title, options)

    event.waitUntil(promiseChain)
})

self.addEventListener('notificationclick', function (event) {
    const promiseChain = clients.openWindow(urlDefault)
    event.waitUntil(promiseChain)
})
