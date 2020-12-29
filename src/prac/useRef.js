import React, { useState, useRef, useEffect } from "react";
// react 의 모든 컴포넌트는 ref 라는 속성을 가지며 이것을 이용하여 focus를 줄 수 있습니다.
// ref.current 는 지정한 컴포넌트의 html 코드를 반환합니다.
// ref.current.focus 는 해당 컴포넌트에 포커스를 입력합니다.
// current 가 존재 할때만 focus를 가질 수 있습니다.
const App = () => {
  const potato = useRef();
  if (potato.current) {
    setTimeout(() => potato.current.focus(), 2000);
  }
  return (
    <div className="App">
      <div>Hi</div>
      <input ref={potato} placeholder={"la"} />
    </div>
  );
};

export default App;
