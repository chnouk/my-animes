import { combineReducers } from "@reduxjs/toolkit";
import { mainPageReducer } from "./MainPageSlice";

const mainReducer = combineReducers({
  main: mainPageReducer
});

export default mainReducer