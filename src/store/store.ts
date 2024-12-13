import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { delaySlice } from './slices/Delay';
import { headerSlice } from './slices/Header';
import { loaderSlice } from './slices/Loader';
import { authSlice } from './slices/Auth';
import { switchSlice } from './slices/Switch';
import { soundSlice } from './slices/Sound';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

// persit config
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['delay', 'header', 'auth', 'loader'],
};

// Combine reducers
const rootReducer = combineReducers({
  delay: delaySlice.reducer,
  header: headerSlice.reducer,
  loader: loaderSlice.reducer,
  auth: authSlice.reducer,
  switch: switchSlice.reducer,
  sound: soundSlice.reducer,
});

// apply persist to reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
            serializableCheck: {
                // IGNORE THIS ACTIONS
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
      }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;