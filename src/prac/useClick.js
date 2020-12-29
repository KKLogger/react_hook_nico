import { useEffect, useRef } from "react";

export const useClick = (onClick) => {
  // useEffect 는 componentDidMount 단계에서 return 이전의 코드가 실행됩니다.
  // useEffect 는 componentWillUnmount 단계에서 return 부분의 코드가 실행됩니다.
  // useEffect 는  deps 에 지정한 state의 componentDidUpdate 단계에서 return 이전의 코드가 실행됩니다.
  // deps 에 []를 추가해야 합니다. -> []이 없이 default 값이 들어가게 되면, componentDidMount 에서 계속 호출됩니다.
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};
