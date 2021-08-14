import { combineReducers } from "@reduxjs/toolkit";
import { mainPageReducer } from "./MainPageSlice";

const MainReducer = combineReducers({
  main: mainPageReducer
});

export default MainReducer