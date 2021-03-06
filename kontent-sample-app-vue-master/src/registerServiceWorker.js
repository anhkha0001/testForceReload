/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated (registration) {
      let confirmationResult = confirm('New content found! Do you want to reload the app?')
      if (confirmationResult) registration.waiting.postMessage({action: 'skipWaiting'})
      //if (confirmationResult) window.location.reload()
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })

  let refreshing
  if(navigator.serviceWorker) {
    navigator.serviceWorker.addEventListener('controllerchange', e=>{
      if(e != null) {
        console.log('EEEEE');
      }
      if (refreshing) return
      alert('Change1')
      window.location.href = '/'
      window.location.reload()
      refreshing = true
    })
  }
}
