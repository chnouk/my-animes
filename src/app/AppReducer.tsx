import { combineReducers } from '@reduxjs/toolkit';
import animesReducer from '../content/anime/AnimesReducer';

const uiReducer = combineReducers({
  animes: animesReducer
})

const appReducer = combineReducers({

  ui: uiReducer,

});

export type AppState = ReturnType<typeof appReducer>;

export default appReducer;