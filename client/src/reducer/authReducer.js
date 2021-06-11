import {REGISTER_FAIl,REGISTER_SUCCESS,LOGIN_FAIl,LOGIN_SUCCESS,LOAD_USER_FAIl,LOAD_USER_SUCCESS,LOGOUT} from "../actions/types";


let initState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuth: false,
  //localStorage.getItem("isAuth") === "true" ? true : false,
  error: null,
};

const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        isAuth: true,
        error: null,
      };
    case LOGIN_FAIl:
    case LOAD_USER_FAIl:
    case REGISTER_FAIl:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        error: action.payload,
      };
    case LOGOUT:
      localStorage.clear();
      return {
        isAuth: false,
        error: null,
        user: null,
      };
    default:
      return state;
  }
};
export default AuthReducer;
