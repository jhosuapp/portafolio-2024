import { configureStore } from '@reduxjs/toolkit';
// Slices
import { delaySlice } from './slices/Delay';
import { headerSlice } from './slices/Header';
import { loaderSlice } from './slices/Loader';

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
    reducer: {
        delay: delaySlice.reducer,
        header: headerSlice.reducer,
        loader: loaderSlice.reducer
    },
});