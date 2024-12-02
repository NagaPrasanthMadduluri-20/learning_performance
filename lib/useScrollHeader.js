// 'use client'
// import React, { useState, useEffect } from 'react';

// // Custom hook to manage scroll behavior
// export const useScrollAwareNavigation = (stickyNavOffset = 80) => {
//   const [isHeaderVisible, setIsHeaderVisible] = useState(true);
//   const [isStickyNavVisible, setIsStickyNavVisible] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY < lastScrollY) {
//         // Scrolling up
//         setIsHeaderVisible(true);
//       } else {
//         // Scrolling down
//         setIsHeaderVisible(currentScrollY <= stickyNavOffset);
//       }

//       setIsStickyNavVisible(currentScrollY > stickyNavOffset);
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY, stickyNavOffset]);

//   return { isHeaderVisible, isStickyNavVisible };
// };



// import React, { useState, useEffect, useRef } from 'react';

// export const useScrollAwareNavigation = () => {
//   const [headerVisible, setHeaderVisible] = useState(true);
//   const [stickyNavAttached, setStickyNavAttached] = useState(false);
//   const lastScrollY = useRef(0);
//   const headerRef = useRef(null);
//   const stickyNavRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       const headerHeight = headerRef.current?.offsetHeight || 0;
//       const stickyNavTop = stickyNavRef.current?.getBoundingClientRect().top || 0;

//       if (stickyNavTop <= headerHeight) {
//         // StickyNav is at or above the bottom of the header
//         setHeaderVisible(false);
//         setStickyNavAttached(true);
//       } else {
//         // StickyNav is below the header
//         setHeaderVisible(true);
//         setStickyNavAttached(false);
//       }

//       lastScrollY.current = currentScrollY;
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return { headerVisible, stickyNavAttached, headerRef, stickyNavRef };
// };

// import { useState, useEffect, useRef } from 'react';


import { useState, useEffect, useRef } from 'react';

export const useScrollHeader = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [scrollThreshold, setScrollThreshold] = useState(0);
  const headerRef = useRef(null);
  const stickynavRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const calculateScrollThreshold = () => {
      if (headerRef.current && stickynavRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        const navTop = stickynavRef.current.getBoundingClientRect().top + window.scrollY;
        setScrollThreshold(navTop - headerHeight);
      }
    };

    calculateScrollThreshold();
    window.addEventListener('resize', calculateScrollThreshold);

    return () => window.removeEventListener('resize', calculateScrollThreshold);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollThreshold) {
        setIsHeaderVisible(false);
        setIsNavSticky(true);
      } else {
        setIsHeaderVisible(true);
        setIsNavSticky(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold]);

  return {
    isHeaderVisible,
    isNavSticky,
    headerRef,
    stickynavRef
  };
};