import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Usamos `localStorage` por defecto
import { delaySlice } from './slices/Delay';
import { headerSlice } from './slices/Header';
import { loaderSlice } from './slices/Loader';
import { authSlice } from './slices/Auth';

// Configuración de persistencia
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['delay', 'header', 'auth', 'loader'],
};

// Combina los reducers
const rootReducer = combineReducers({
  delay: delaySlice.reducer,
  header: headerSlice.reducer,
  loader: loaderSlice.reducer,
  auth: authSlice.reducer,
});

// Aplica persistencia al reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;