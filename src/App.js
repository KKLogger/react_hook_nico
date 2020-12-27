import React, { useState } from "react";

import "./App.css";
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    setValue(event.target.value);
  };
  return { value, onChange };
};
const App = () => {
  const [item, setItem] = useState(1);
  const name = useInput("Mr.");

  // useState 는 array 형태로 값을 반환 [0] : 값 [1] : 값 수정 함수
  // <input placeholder={"Name"} value={name.value} onChange={name.onChange} /> 는
  // <input placeholder={"Name"} {...name} /> 으로 대체될 수 있습니다.
  return (
    <div className={"App"}>
      <h1>Hello React Hook!</h1>
      <input placeholder={"Name"} {...name} />
    </div>
  );
};

export default App;
