import { useState } from 'react';

function useValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const [checked, setChecked] = useState(false);

  const checkError = (evt) => {
    const { name, validationMessage: error } = evt.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));

    const form = evt.target.closest('form');
    setIsValid(form.checkValidity());
  };

  const onChange = (evt) => {
    if (evt.target.type === 'checkbox') {
      setChecked(!checked);
    }

    const { name, value } = evt.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));

    checkError(evt);
  };

  const onKeyDown = (evt) => evt.key === 'Enter' && checkError(evt);

  const resetValidation = (newValues = {}, newErrors = {}, checkbox = false) => {
    setChecked(checkbox);
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(false);
  };

  return {
    values,
    errors,
    isValid,
    checked,
    onChange,
    checkError,
    onKeyDown,
    resetValidation,
  };
}

export default useValidation;
