import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import categorieReducer from "./categorieReducer";
import { getProductReducer } from "./productReducer";

export default combineReducers({
  auth: AuthReducer,
  productReducer: getProductReducer,
  catR:categorieReducer
});
