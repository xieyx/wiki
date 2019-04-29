/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "76764e70a4d16c33bae9dca368d3e65b"
  },
  {
    "url": "assets/css/0.styles.99d08b25.css",
    "revision": "616b1e3fd24ba14a621116b3b2960e84"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.3768c562.js",
    "revision": "dd326f9eac62bcee6780c6be086d618b"
  },
  {
    "url": "assets/js/3.80b5aced.js",
    "revision": "ad07cffe71950f62e9c95bf8d55f9703"
  },
  {
    "url": "assets/js/4.74c3150e.js",
    "revision": "e2a9537a0e005665f949f1d8069118be"
  },
  {
    "url": "assets/js/5.2ac6f6d0.js",
    "revision": "7373376a056d8b62e86df8eeaaa37982"
  },
  {
    "url": "assets/js/app.d3005c7d.js",
    "revision": "4262dac6e812f4a4a6ef0eab3dcc89e1"
  },
  {
    "url": "icons/qrcode.png",
    "revision": "b726d36310d046a8fd77c25a8138064c"
  },
  {
    "url": "index.html",
    "revision": "20c6cba6e3b1ec648a6039ea229fa077"
  },
  {
    "url": "wiki/index.html",
    "revision": "993da2d187aca54cb9d8101f7f9d2263"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
