import React from "react";
import classes from "./Input.module.css";

//! Binding the Input component with the forward Ref because after that this component will become the argument of the Forwart Ref. So that we can directly read data from the input.

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});
export default Input;
