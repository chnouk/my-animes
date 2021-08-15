import { combineReducers } from '@reduxjs/toolkit';
import animesReducer from '../content/animes/AnimesReducer';
import dataReducer from '../data/DataReducer';

const uiReducer = combineReducers({
  animes: animesReducer
})

const appReducer = combineReducers({

  data: dataReducer,

  ui: uiReducer,

});

export type AppState = ReturnType<typeof appReducer>;

export default appReducer;