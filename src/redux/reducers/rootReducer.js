import { combineReducers } from "redux";
import filmesReducer from "./filmesReducer";
import genredReducer from "./genresReducer";

const rootReducer = combineReducers({
  filmes: filmesReducer,
  genres: genredReducer,
});

export default rootReducer;