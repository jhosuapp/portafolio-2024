import { Dispatch } from '@reduxjs/toolkit';
import { checkingCredentials } from './authSlice';

const checkingAuth = (email:string, password:string) => {
    return async ( dispatch:Dispatch<any> ) => {
        dispatch(checkingCredentials());
    }
}

const startGoogleSignIn = () => {
    return async ( dispatch:Dispatch<any> ) => {
        dispatch(checkingCredentials());
    }
}

export { checkingAuth, startGoogleSignIn }