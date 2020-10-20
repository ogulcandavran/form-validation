import { combineReducers } from "redux";
import formReducer from "./formReducer";
import validateReducer from "./validateReducer";
import submitReducer from "./submitReducer";

export default combineReducers({
  formValues: formReducer,
  errors: validateReducer,
  isSubmittable: submitReducer
});