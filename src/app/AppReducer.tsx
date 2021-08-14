import { combineReducers } from '@reduxjs/toolkit';
import MainReducer from '../main/MainReducer';


const uiReducer = combineReducers({
  main: MainReducer
})

const appReducer = combineReducers({

  ui: uiReducer,

});

export type AppState = ReturnType<typeof appReducer>;

export default appReducer;