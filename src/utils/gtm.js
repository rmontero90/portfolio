// Helper to initialize Google Tag Manager (GTM) or Google Analytics (gtag) at runtime
export function initGTM() {
  const id = import.meta.env.VITE_GTM_ID;
  if (!id) return;

  // If a GTM container ID (GTM-XXXX) is provided, insert GTM script + noscript iframe.
  if (id.startsWith('GTM-')) {
    // Initialize dataLayer and push gtm.start
    const dlScript = document.createElement('script');
    dlScript.type = 'text/plain';
    dlScript.textContent = `window.dataLayer = window.dataLayer || []; window.dataLayer.push({'gtm.start': new Date().getTime(), event:'gtm.js'});`;
    // Insert the dataLayer initializer as an inline script at the top of head
    document.head.prepend(dlScript);

    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
    document.head.appendChild(gtmScript);

    // Add the noscript iframe for users without JS
    const iframeHtml = `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    const noscript = document.createElement('noscript');
    noscript.innerHTML = iframeHtml;
    // Append the noscript as the first child of the body
    if (document.body) {
      document.body.prepend(noscript);
    } else {
      window.addEventListener('DOMContentLoaded', () => document.body.prepend(noscript));
    }

    return;
  }

  // If a GA4 Measurement ID (G-XXXX) is provided, insert gtag.js
  if (id.startsWith('G-')) {
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(gtagScript);

    const inline = document.createElement('script');
    inline.textContent = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${id}');`;
    document.head.appendChild(inline);
    return;
  }
}

// Push an event to the appropriate analytics layer (dataLayer or gtag)
export function pushEvent(nameOrObj, params = {}) {
  if (!nameOrObj) return;

  // If gtag-style call (string event name), use gtag when available
  if (typeof nameOrObj === 'string') {
    const eventName = nameOrObj;
    if (window.gtag) {
      window.gtag('event', eventName, params);
      return;
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: eventName }, params));
    return;
  }

  // If object passed, push to dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(nameOrObj);
}

export default { initGTM, pushEvent };
