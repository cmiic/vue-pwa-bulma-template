self.addEventListener('fetch', function (e) {})
self.addEventListener('install', function (e) {})

self.addEventListener('push', event => {
  const data = event.data.json()
  const image = '@assets/img/icon-small.png'
  const options = {
    body: data.options.body,
    icon: image
  }
  self.registration.showNotification(
    data.title,
    options
  )
})
