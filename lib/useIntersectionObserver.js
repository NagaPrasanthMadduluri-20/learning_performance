import { useState, useEffect, useRef } from "react";

const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, [options]);
  return [elementRef, isVisible];
};

export default useIntersectionObserver;
