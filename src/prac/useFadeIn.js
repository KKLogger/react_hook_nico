import React, { useRef, useEffect } from "react";

export const useFadeIn = (duration = 1, delay = 0) => {
  //hooks + animation : css 를 통해서도 구현이 가능하지만, hook을 통해 구현이 가능하다
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      const current = ref.current;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref, style: { opacity: 0 } };
};
