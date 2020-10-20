import { FORM, CHECKBOX } from "../actions/types";
const initialState = {
  education: [],
  firstName: "",
  lastName: "",
  age: "",
  email: "",
  phone: "",
  gender: "",
  nationality: "",
  info: ""
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FORM:
      return { ...state, [action.payload[1]]: action.payload[0] };
    case CHECKBOX:
      if (action.payload[1]) {
        return { ...state, education: [...state.education, action.payload[0]] };
      }
      return {
        ...state,
        education: [...state.education.filter(e => e !== action.payload[0])]
      };
    default:
      return state;
  }
};