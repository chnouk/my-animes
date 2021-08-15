import { combineReducers } from "@reduxjs/toolkit";
import { animesDataReducer } from "./AnimesDataSlice";

const dataReducer = combineReducers({
  animes: animesDataReducer
});

export default dataReducer