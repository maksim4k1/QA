import { combineReducers } from "redux";
import filmesReducer from "./filmesReducer";

const rootReducer = combineReducers({
  filmes: filmesReducer
});

export default rootReducer;