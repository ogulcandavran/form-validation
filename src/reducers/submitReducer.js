import { SUBMIT } from "../actions/types";
export default (state = {}, action) => {
  switch (action.type) {
    case SUBMIT:
      return action.payload;
    default:
      return state;
  }
};