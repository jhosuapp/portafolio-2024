import { Dispatch } from '@reduxjs/toolkit';
import { checkingCredentials, logout, login } from './authSlice';
import { loginWithEmailPassword, logoutFirebase, registerWithEmailPassword, signInWithGoogle } from '@/firebase/providers';
import { RegisterType, LoginType } from '@/models';

//Register with google 
const startGoogleSignIn = () => {
    return async ( dispatch: Dispatch<any> ) => {
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();
        //Validate error in response
        if(!result.ok){
            dispatch(logout( result ));
            return;
        } 
        //Logged user if all it's ok
        console.log(result);
        dispatch( login( result ) );
    }
}

//Register with email and password
const startCreatingUserWithEmailPassword = ({ email, password, displayName }:RegisterType) => {
    return async ( dispatch:Dispatch<any> ) => {
        dispatch(checkingCredentials());

        const result = await registerWithEmailPassword({ email, password, displayName });
        //Validate error in response
        if(!result.ok){
            dispatch(logout( result ));
            return;
        } 
        //Logged user if all it's ok
        dispatch( login( result ) );
    }
}

//Login with email and password
const startLoginWithEmailPassword = ({ email, password }:LoginType) => {
    return async (dispatch:Dispatch<any>) => {
        dispatch(checkingCredentials());

        const result = await loginWithEmailPassword({email, password});
        //Validate error in response
        if(!result.ok) {
            dispatch(logout( result ));
            return;
        }
        //Logged user if all it's ok
        dispatch( login( result ) );
    }
}

//Logout
const startLogout = () => {
    return async (dispatch:Dispatch<any>) => {
        await logoutFirebase();

        dispatch(logout(''));
    }
}

export { startGoogleSignIn, startCreatingUserWithEmailPassword, startLoginWithEmailPassword, startLogout }