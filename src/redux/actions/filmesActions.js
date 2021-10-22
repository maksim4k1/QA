import { GET_FILM, GET_FILMES, SET_SEARCH_VALUE, SET_SORT_VALUE, SORT_FILMES } from "../types";

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
  return {type: SET_SORT_VALUE, payload: value};
}
export function setSearchFilmesValueAction(value){
  return {type: SET_SEARCH_VALUE, payload: value};
}