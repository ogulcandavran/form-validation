import { FORM, CHECKBOX, VALIDATE, SUBMIT } from "./types";
export const formAction = (value, name) => {
  return {
    type: FORM,
    payload: [value, name]
  };
};
export const checkboxAction = (value, checked) => {
  return {
    type: CHECKBOX,
    payload: [value, checked]
  };
};
export const validateAction = value => {
  return {
    type: VALIDATE,
    payload: value
  };
};
export const submitAction = value => {
  return {
    type: SUBMIT,
    payload: value
  };
};