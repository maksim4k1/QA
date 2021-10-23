import { ADD_NEW_FILM, GET_FILM, GET_FILMES, SET_ERROR, SET_SEARCH_VALUE, SET_SORT_VALUE, SORT_FILMES } from "../types";

export function getFilmesAction(){
  return {type: GET_FILMES};
}
export function getFilmeByIdAction(id){
  return {type: GET_FILM, payload: id};
}
export function sortFilmesAction(){
  return {type: SORT_FILMES};
}
export function setSortFilmesValueAction(value){
  return function(dispatch){
    dispatch({type: SET_SORT_VALUE, payload: value});
    dispatch(sortFilmesAction());
  };
}
export function setSearchFilmesValueAction(value){
  return {type: SET_SEARCH_VALUE, payload: value};
}
export function addNewFilmAction(object){
  const {name, image, director, genres, actors, publishYear} = object;
  if(!name || !image || !director || !genres || !actors || !publishYear){
    return {type: SET_ERROR, payload: "Заполните все поля!"};
  }
  return function(dispatch){
    dispatch({type: SET_ERROR, payload: ""});
    dispatch({type: ADD_NEW_FILM, payload: object});
  };
}