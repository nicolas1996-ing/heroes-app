/* eslint-disable no-unreachable */
import { types } from "../types/types";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };
      break;
    case types.logout:
      return {
        logged: false,
      };
      break;

    default:
      return state;
      break;
  }
};
