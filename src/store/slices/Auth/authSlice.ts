import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
    status: 'checking' | 'not-auth' | 'auth',
    uid: number | null,
    email: string | null,
    displayName: string | null,
    photoURL: string | null,
    errorMessage: string | null
}

const initialState:AuthState = {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state, { payload }) =>{
            state.status = 'auth';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        logout: (state, { payload }) =>{
            state.status = 'not-auth';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload?.error || null;
        },
        checkingCredentials: (state) =>{
            state.status = 'checking'
        },
        resetErrorMessage: (state) =>{
            state.errorMessage = null;
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials, resetErrorMessage } = authSlice.actions;