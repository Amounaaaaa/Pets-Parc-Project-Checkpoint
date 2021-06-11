import { GET_CATEGORIE_FAIl, GET_CATEGORIE_SUCCESS } from "./types";
import axios from "axios";


export const getAllCategorie=()=>dispatch=>{
  axios.get('/categorie')
      .then(res=>dispatch({
          type:GET_CATEGORIE_SUCCESS,
          payload:res.data
      }))
      .catch(err=>dispatch({
          type:GET_CATEGORIE_FAIl,
          payload:err.response.data.errors,
      }))
}
