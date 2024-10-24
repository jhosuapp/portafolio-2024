import { Dispatch } from '@reduxjs/toolkit';
import { checkingCredentials, logout, login } from './authSlice';
import { registerWithEmailPassword, signInWithGoogle } from '@/firebase/providers';
import { RegisterType } from '@/models';

const checkingAuth = (email:string, password:string) => {
    console.log(email, password);
    return async ( dispatch:Dispatch<any> ) => {
        dispatch(checkingCredentials());
    }
}

//Register with google 
const startGoogleSignIn = () => {
    return async ( dispatch:Dispatch<any> ) => {
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();
        //Validate error in response
        if(!result.ok) return dispatch(logout( result ));
        //Logged user if all it's ok
        dispatch( login( result ) );
    }
}

//Register with email and password
const startCreatingUserWithEmailPassword = ({ email, password, displayName }:RegisterType) => {
    return async ( dispatch:Dispatch<any> ) => {
        dispatch(checkingCredentials());

        const result = await registerWithEmailPassword({ email, password, displayName });
        //Validate error in response
        if(!result.ok) return dispatch(logout( result ));
        //Logged user if all it's ok
        dispatch( login( result ) );
    }
}

export { checkingAuth, startGoogleSignIn, startCreatingUserWithEmailPassword }