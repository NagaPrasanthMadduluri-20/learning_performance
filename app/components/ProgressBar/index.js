import React, { useCallback, useEffect, useState } from "react";

const ProgressBar = ({ target, topOffset, bottomOffset }) => {
  const [readingProgress, setReadingProgress] = useState(0);

  const scrollListener = useCallback(() => {
    if (!target.current) {
      return;
    }
    const element = target.current;
    const windowHeight = window.innerHeight;
    const offsetTop = element.offsetTop;

    // Calculate the total scrollable height of the content
    const totalHeight =
      element.clientHeight -
      offsetTop -
      (windowHeight - topOffset - bottomOffset);

    // Calculate the current scroll position relative to the content
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const currentPosition = windowScrollTop - offsetTop + topOffset;

    if (currentPosition <= 0) {
      return setReadingProgress(0);
    }

    if (currentPosition > totalHeight) {
      return setReadingProgress(100);
    }

    setReadingProgress((currentPosition / totalHeight) * 100);
  }, [target, topOffset, bottomOffset]);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);

    return () => window.removeEventListener("scroll", scrollListener);
  }, [scrollListener]);

  return (
    <div
      className={` z-30 bg-lightbackground w-full fixed top-20 left-0 right-0}`}
    >
      <div
        className={` ${
         "w-full h-1 bg-primary"
        }`}
        style ={ 
        { width: `${readingProgress}%` }
        }
      ></div>
    </div>
  );
};

export default ProgressBar;
