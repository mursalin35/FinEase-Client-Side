// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto", // চাইলে "auto" দিতে পারো
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
