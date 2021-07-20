import React, { useState } from "react";

const useInput = (validateInput) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const valueIsValid = validateInput(enteredValue)
  const hasError = !valueIsValid && isTouched

  return{
      value: enteredValue,
      inputChangeHandler,
      inputBlurHandler,
      valueIsValid,
      hasError
  }
};
export default useInput;
