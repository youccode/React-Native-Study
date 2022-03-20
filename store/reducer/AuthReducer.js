import { LOGIN, SIGN_UP } from "../action/AuthAction";

const initialState = {
  token: "",
  userId: "",
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { token: action.token, userId: action.userId };
    case SIGN_UP:
      return { token: action.token, userId: action.userId };
    default:
      return state;
  }

  return state;
};
