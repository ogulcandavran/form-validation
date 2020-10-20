import { VALIDATE } from "../actions/types";
export default (state = {}, action) => {
  switch (action.type) {
    case VALIDATE:
      return action.payload;
    default:
      return state;
  }
};