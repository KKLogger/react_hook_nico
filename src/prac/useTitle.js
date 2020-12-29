import { useEffect, useState } from "react";
// useEffect는 component가 생성,수정,삭제 될 때 실행됩니다.
// effect 인자는 실행할 함수를 지정합니다.
// deps 인자는 배열로 인자를 전달하며, useEffect가 어떤 state의 수정에 대해 호출 될지 설정합니다.
// useEffect는 처음 랜더링 될 때 무조건 실행 됩니다. 이후 지정한 state의 값이 수정되면 다시 호출됩니다
// useEffect 는 componentDidMount 단계에서 return 이전의 코드가 실행됩니다.
// useEffect 는 componentWillUnmount 단계에서 return 부분의 코드가 실행됩니다.
// useEffect 는  deps 에 지정한 state의 componentDidUpdate 단계에서 return 이전의 코드가 실행됩니다.
export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    if (typeof title === "string") {
      htmlTitle.innerText = title;
    }
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
