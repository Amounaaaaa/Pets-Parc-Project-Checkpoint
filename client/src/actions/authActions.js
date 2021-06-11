import {REGISTER_FAIl,REGISTER_SUCCESS,LOGIN_FAIl,LOGIN_SUCCESS,LOAD_USER_FAIl,LOAD_USER_SUCCESS,LOGOUT} from "./types";
import axios from "axios";
import setToken from "../setToken";


export const registerUser=(info)=>dispatch=>{
  axios.post('/register',info)
      .then(res=>dispatch({
          type:REGISTER_SUCCESS,
          payload:res.data
      }))
      .catch(err=>dispatch({
          type:REGISTER_FAIl,
          payload:err.response.data.errors,
      }))
}

///////LOAD USER:
export const loadUser=()=>dispatch=>{
  setToken()
  axios.get('/login')
      .then(res=>dispatch({
          type:LOAD_USER_SUCCESS,
          payload:res.data
      }))
      .catch(err=>dispatch({
          type:LOAD_USER_FAIl,
          payload:err.response.data.errors
      }))
}
////  LOGIN:
export const loginUser = (data) => (dispatch) => {
  axios
    .post("/login", data)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      localStorage.setItem("isAuth", true);
    })
    .catch((err) =>
      dispatch({
        type: LOGIN_FAIl,
        payload: err.response.data.errors,
      })
    );
};

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
