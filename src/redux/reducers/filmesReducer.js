import { filmesData } from "../../db";
import { FIND_FILM, GET_FILM, GET_FILMES, SORT_FILMES } from "../types";

const initialState = {
  filmes: [],
  sortedFilmes: [],
  selectedFilm: null,
  sort: "",
  search: "",
};

function filmesReducer(state=initialState, {type, payload}){
  switch(type){
    case GET_FILMES: {
      return {
        ...state,
        filmes: filmesData
      }
    } case GET_FILM: {
      return {
        ...state,
        selectedFilm: state.filmes.find(film => film.id === payload)
      }
    } case SORT_FILMES: {
      const sortedFilmes = state.filmes.filter(film => film.genres.find(genre => state.sort === genre) !== undefined);

      return {
        ...state,
        sortedFilmes
      }
    } case FIND_FILM: {
      const sortedFilmes = state.filmes.filter(film => {
        if(film.name.includes(state.search)){
          return film;
        } else{
          if(film.actors.find(actor => actor.includes(state.search)) !== undefined){
            return film;
          }
        }
      });
      
      return {
        ...state,
        sortedFilmes
      }
    } default: {
      return state;
    }
  }
}

export default filmesReducer;