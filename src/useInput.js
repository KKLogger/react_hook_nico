import { useState } from "react";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
// useState 는 array 형태로 값을 반환 [0] : 값 [1] : 값 수정 함수
// <input placeholder={"Name"} value={name.value} onChange={name.onChange} /> 는
// <input placeholder={"Name"} {...name} /> 으로 대체될 수 있습니다.
