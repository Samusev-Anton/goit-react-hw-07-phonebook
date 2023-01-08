import { configureStore } from '@reduxjs/toolkit';
// import { contactReducer } from './formSlice';
// import { persistedContactsReduser } from './formSlice';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterSlice } from './filterSlice';
import { userSlice } from './userSlice';
import { contactsSlice } from './formSlice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const rootReduser = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
  user: userSlice.reducer,
});

const persistedContactsReduser = persistReducer(persistConfig, rootReduser);

export const store = configureStore({
  reducer: persistedContactsReduser,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
