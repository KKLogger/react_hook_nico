import { useEffect } from "react";

export const useBeforeLeave = (onMouseLeave) => {
  useEffect(() => {
    document.addEventListener("mouseleave", onMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);
};
