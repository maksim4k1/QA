import { genresData } from "../../db";
import { GET_GENRES } from "../types";

const initialState = [];

function genredReducer(state=initialState, {type}){
  switch(type){
    case GET_GENRES: {
      return genresData;
    } default: {
      return state;
    }
  }
}

export default genredReducer;