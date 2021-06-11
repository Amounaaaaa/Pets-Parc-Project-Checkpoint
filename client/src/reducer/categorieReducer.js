import { GET_CATEGORIE_FAIl, GET_CATEGORIE_SUCCESS } from "../actions/types";


let initState = {
    categories:null,
    error: null,
};

const categorieReducer = (state = initState, action) => {
  switch (action.type) {

    case GET_CATEGORIE_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        error: null,
      };
    case GET_CATEGORIE_FAIl:
      
      return {
        ...state,
        error: action.payload,
      };
    
    default:
      return state;
  }
};
export default categorieReducer;
