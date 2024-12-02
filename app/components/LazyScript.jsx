'use client';

import { useEffect, useRef } from 'react';

export default function LazyScript({ src, delay = 5000, className, id, loadOnUserActivity = false }) {
  const scriptRef = useRef(null);

  useEffect(() => {
    let timeoutId;

    const loadScript = () => {
      if (scriptRef.current) return; // Prevent duplicate loading

      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.defer = true;
      if (className) script.className = className;
      if (id) script.id = id;

      scriptRef.current = script;
      document.body.appendChild(script);

      if (loadOnUserActivity) {
        window.removeEventListener('mousemove', loadScript);
        window.removeEventListener('touchstart', loadScript);
      }
    };

    if (loadOnUserActivity) {
      window.addEventListener('mousemove', loadScript, { once: true });
      window.addEventListener('touchstart', loadScript, { once: true });
    }

    timeoutId = setTimeout(loadScript, delay);

    return () => {
      clearTimeout(timeoutId);
      if (loadOnUserActivity) {
        window.removeEventListener('mousemove', loadScript);
        window.removeEventListener('touchstart', loadScript);
      }
    };
  }, [src, delay, className, id, loadOnUserActivity]);

  return null;
}