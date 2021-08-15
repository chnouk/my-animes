import { combineReducers } from '@reduxjs/toolkit';
import animesReducer from '../content/animes/AnimesReducer';
import dataReducer from '../data/DataReducer';
import mainReducer from '../main/MainReducer';

const uiReducer = combineReducers({
  main: mainReducer,
  animes: animesReducer
})

const appReducer = combineReducers({

  data: dataReducer,

  ui: uiReducer,

});

export type AppState = ReturnType<typeof appReducer>;

export default appReducer;