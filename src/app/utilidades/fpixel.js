/* eslint-disable @typescript-eslint/no-unused-expressions */
// lib/fpixel.js

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export const pageview = () => {
  window.fbq('track', 'PageView');
};

// https://developers.facebook.com/docs/facebook-pixel/reference
export const event = (name, options) => {
  window.fbq('track', name, options);
};

// Initialize Facebook Pixel if not already initialized
export const initFbPixel = () => {
  if (typeof window !== 'undefined' && !window.fbq) {
    // Standard Pixel Initialization Code
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    );
    window.fbq('init', FB_PIXEL_ID);
    window.fbq('track', 'PageView'); // Track initial PageView
  }
};