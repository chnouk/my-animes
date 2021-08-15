import { configureStore, Action } from '@reduxjs/toolkit';
import thunk, { ThunkAction } from 'redux-thunk';
import appReducer, { AppState } from './AppReducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'my-anime-data',
  storage,
  blacklist: ['ui']
}
const persistedAppReducer = persistReducer(persistConfig, appReducer)

const appStore = configureStore({
  reducer: persistedAppReducer,
  middleware: [thunk],
});

export const appPersistor = persistStore(appStore)

export type AppDispatch = typeof appStore.dispatch;

export type AppThunk = ThunkAction<
  void,
  AppState,
  unknown,
  Action<string>
>;

export default appStore;