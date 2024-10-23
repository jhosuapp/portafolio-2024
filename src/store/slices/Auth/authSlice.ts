import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    status: 'checking' | 'not-auth' | 'auth',
    uid: number | null,
    email: string | null,
    displayName: string | null,
    photoUrl: string | null,
    errorMessage: string | null
}

const initialState:AuthState = {
    status: 'not-auth',
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
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
            state.photoUrl = payload.photoUrl;
            state.errorMessage = null;
        },
        logout: (state, { payload }) =>{
            state.status = 'not-auth';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoUrl = null;
            state.errorMessage = payload.errorMessage;
        },
        checkingCredentials: (state) =>{
            state.status = 'checking'
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;