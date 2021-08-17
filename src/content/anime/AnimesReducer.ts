import { combineReducers } from "@reduxjs/toolkit";
import { animesPageReducer } from "./AnimePageSlice";

const animesReducer = combineReducers({
  home: animesPageReducer
});

export default animesReducer