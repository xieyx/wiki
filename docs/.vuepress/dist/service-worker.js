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
    "revision": "52390a9fd8033bc93d26823c06c46aad"
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
    "url": "assets/js/4.b2cbb8a4.js",
    "revision": "b327fd40b05fb140376d7da8479e6a3f"
  },
  {
    "url": "assets/js/5.a26c5398.js",
    "revision": "6d541901d799396437c56c5dde5dd86b"
  },
  {
    "url": "assets/js/6.d04ea0af.js",
    "revision": "916d00004f945dc40e6e2bac0ec2b670"
  },
  {
    "url": "assets/js/app.be838a8b.js",
    "revision": "53eb679db94789ab838c570030f07aeb"
  },
  {
    "url": "icons/qrcode.png",
    "revision": "b726d36310d046a8fd77c25a8138064c"
  },
  {
    "url": "index.html",
    "revision": "54096d45b029fcf8a6a9b0a31227a0fb"
  },
  {
    "url": "wiki/index.html",
    "revision": "72de5aa7caeb9b23506193c0f8a6abf3"
  },
  {
    "url": "wiki/test.html",
    "revision": "4891e570fa8870aa3ae63acad28b2b09"
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
