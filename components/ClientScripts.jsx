// utils/client-scripts.js
"use client" 
import { useEffect } from 'react';

export function useClientScripts() {
  useEffect(() => {
    const scripts = [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-XCLJ09CD6B',
        async: true,
        id: 'gtm-script',
      },
      {
        src: 'https://static.hotjar.com/c/hotjar-3548742.js?sv=6',
        async: true,
        id: 'hotjar-script',
      },
      {
        src: 'https://static.zdassets.com/ekr/snippet.js?key=b5798bd8-0e7e-4e68-a1d0-6d949b4063e6',
        async: true,
        defer: true,
        id: 'zopim-script',
      },
      {
        src: 'https://cytriocpmprod.blob.core.windows.net/cytrio-public/cookiescript/2312/2394/script.js',
        async: true,
        defer: true,
        className: 'cytrio-script',
        id: 'cytrio-script',
      },
    ];

    function loadScript({ src, async, defer, id, className }, delay) {
      setTimeout(() => {
        const scriptElement = document.createElement('script');
        scriptElement.src = src;
        scriptElement.async = async || false;
        scriptElement.defer = defer || false;
        if (id) scriptElement.id = id;
        if (className) scriptElement.className = className;

        document.body.appendChild(scriptElement);
      }, delay);
    }

    // Load scripts with delays
    scripts.forEach(({ src, async, defer, id, className }, index) => {
      const delay = (index + 1) * 10000; // 10 seconds delay for each script
      loadScript({ src, async, defer, id, className }, delay);
    });

    // Cleanup scripts if necessary (optional)
    return () => {
      scripts.forEach(({ id }) => {
        if (id) {
          const scriptElement = document.getElementById(id);
          if (scriptElement) document.body.removeChild(scriptElement);
        }
      });
    };
  }, []); // Empty dependency array means this runs only on mount
}
