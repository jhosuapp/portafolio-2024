import { Dispatch } from '@reduxjs/toolkit';
import { checkingCredentials, logout, login } from './authSlice';
import { signInWithGoogle } from '@/firebase/providers';

const checkingAuth = (email:string, password:string) => {
    return async ( dispatch:Dispatch<any> ) => {
        dispatch(checkingCredentials());
    }
}

const startGoogleSignIn = () => {
    return async ( dispatch:Dispatch<any> ) => {

        dispatch(checkingCredentials());

        const result = await signInWithGoogle();
        //Validate error in response
        if(!result.ok) return dispatch(logout( result.error ));

        dispatch( login( result ) );

    }
}

export { checkingAuth, startGoogleSignIn }