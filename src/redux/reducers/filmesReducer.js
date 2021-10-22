import { filmesData } from "../../db";
import { GET_FILM, GET_FILMES, SET_SEARCH_VALUE, SET_SORT_VALUE, SORT_FILMES } from "../types";

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
      };
    } case GET_FILM: {
      return {
        ...state,
        selectedFilm: state.filmes.find(film => film.id === payload)
      };
    } case SORT_FILMES: {
      let sortedFilmes = state.filmes.filter(film => film.genres.find(genre => genre === state.sort));
      const findFilmesByName = sortedFilmes.filter(film => film === state.search);
      const findFilmesByActors = sortedFilmes.filter(film => film.actors.find(actor => actor === state.search));

      sortedFilmes = findFilmesByName.concat(findFilmesByActors.filter(item => findFilmesByName.find(el => el === item.id) !== undefined));

      return {
        ...state,
        sortedFilmes
      };
    } case SET_SORT_VALUE: {
      return {
        ...state,
        sort: payload
      };
    } case SET_SEARCH_VALUE: {
      return {
        ...state,
        search: payload
      };
    } default: {
      return state;
    }
  }
}

export default filmesReducer;