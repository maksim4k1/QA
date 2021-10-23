import { addNewFilmToBd, filmesData } from "../../db";
import { ADD_NEW_FILM, GET_FILM, GET_FILMES, SET_ERROR, SET_SEARCH_VALUE, SET_SORT_VALUE, SORT_FILMES } from "../types";

const initialState = {
  filmes: [],
  sortedFilmes: [],
  selectedFilm: {},
  sort: "",
  search: "",
  error: "",
};

function filmesReducer(state=initialState, {type, payload}){
  switch(type){
    case GET_FILMES: {
      return {
        ...state,
        filmes: filmesData,
        sortedFilmes: filmesData,
      };
    } case GET_FILM: {
      return {
        ...state,
        selectedFilm: state.filmes.find(film => film.id === Number(payload))
      };
    } case SORT_FILMES: {
      let sortedFilmes = state.sort ? state.filmes.filter(film => film.genres.find(genre => genre === state.sort) !== undefined) : state.filmes;

      const findFilmesByName = sortedFilmes.filter(film => film.name.includes(state.search || "") === true);
      const findFilmesByActors = sortedFilmes.filter(film => film.actors.find(actor => actor.includes(state.search || "") === true));

      sortedFilmes = findFilmesByName.concat(findFilmesByActors.filter(item => findFilmesByName.find(el => el.id === item.id) === undefined));

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
    } case ADD_NEW_FILM: {
      addNewFilmToBd({...payload, id: state.filmes.length});
      return {
        ...state,
        filmes: filmesData,
        sortedFilmes: filmesData,
      }
    } case SET_ERROR: {
      return {
        ...state,
        error: payload
      }
    } default: {
      return state;
    }
  }
}

export default filmesReducer;