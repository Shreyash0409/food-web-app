import useInput from "../../CustomHooks/use-input";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length >= 5;

const Checkout = (props) => {
  //! For validating name input
  const validateNameInput = (value) => value.trim() !== "";
  const {
    value: enteredName,
    inputChangeHandler: nameInputHandler,
    inputBlurHandler: nameBlurHandler,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
  } = useInput(validateNameInput);

  //! For validating street input
  const validateStreetInput = (value) => value.trim().length > 5;
  const {
    value: enteredStreet,
    inputChangeHandler: streetInputHandler,
    inputBlurHandler: streetBlurHandler,
    valueIsValid: streetIsValid,
    hasError: streetHasError,
  } = useInput(validateStreetInput);

  //! For validating postalCode input
  const validatePostalCodeInput = (value) => value.trim().length === 6;
  const {
    value: enteredPostalCode,
    inputChangeHandler: postalCodeInputHandler,
    inputBlurHandler: postalCodeBlurHandler,
    valueIsValid: postalCodeIsValid,
    hasError: postalCodeHasError,
  } = useInput(validatePostalCodeInput);

  //! For validating city input
  const validateCityInput = (value) => value.trim().length >= 3;
  const {
    value: enteredCity,
    inputChangeHandler: cityInputHandler,
    inputBlurHandler: cityBlurHandler,
    valueIsValid: cityIsValid,
    hasError: cityHasError,
  } = useInput(validateCityInput);

  let formIsValid = false;
  if (nameIsValid && streetIsValid && cityIsValid && postalCodeIsValid) {
    formIsValid = true;
  }

  //TODO : Button Clicked for form submission.
  const confirmHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  const nameControlClasses = `${classes.control} ${
    nameHasError ? classes.invalid : ""
  }`;
  const streetControlClasses = `${classes.control} ${
    streetHasError ? classes.invalid : ""
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    postalCodeHasError ? classes.invalid : ""
  }`;
  const cityControlClasses = `${classes.control} ${
    cityHasError ? classes.invalid : ""
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && (
          <p className={classes.error}>Please enter a valid name!</p>
        )}
      </div>

      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={streetInputHandler}
          onBlur={streetBlurHandler}
        />
        {streetHasError && (
          <p className={classes.error}>Please enter a valid street!</p>
        )}
      </div>

      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          onChange={postalCodeInputHandler}
          onBlur={postalCodeBlurHandler}
        />
        {postalCodeHasError && (
          <p className={classes.error}>Please enter a valid postal code!</p>
        )}
      </div>

      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={cityInputHandler}
          onBlur={cityBlurHandler}
        />
        {cityHasError && (
          <p className={classes.error}>Please enter a valid city!</p>
        )}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!formIsValid}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
