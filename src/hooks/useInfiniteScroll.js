import { useState, useEffect } from "react";

const useInfiniteScroll = (callback, nextPage) => {
  const [isGettingData, setIsGettingData] = useState(false);

  // when user scrolls i'm calling isScrolling function to determine if user is on bottom,
  // besides all of thet im cleaning the useEffect function to dont over-load it.
  useEffect(() => {
    window.addEventListener("scroll", isScrolling);
    return () => window.removeEventListener("scroll", isScrolling);
  }, []);

  useEffect(() => {
    if (!isGettingData || nextPage === null) return;
    callback();
  }, [isGettingData, nextPage]);

  function isScrolling() {
    // This check is to detect if i'm on the bottom of the page.
    // -10 is simply threshold.
    if (
      window.innerHeight + document.documentElement.scrollTop >
      document.documentElement.offsetHeight - 10
    ) {
      setIsGettingData(true);
    }
  }
  return [isGettingData, setIsGettingData];
};

export default useInfiniteScroll;
