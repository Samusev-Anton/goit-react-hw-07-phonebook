import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { userSlice } from './userSlice';
import { contactsApi } from './formSlice';
// import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

// setupListeners(store.dispatch);
