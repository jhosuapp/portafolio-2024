import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";
import { LoginType, RegisterType } from "@/models";

const googleProvider = new GoogleAuthProvider();

//Sign in with google
export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName, email, photoURL, uid
        }
    } catch (error:unknown) {
        if (error instanceof Error) {
            return {
                ok: false,
                error: error.message
            };
        } else {
            return {
                ok: false,
                error: 'Unknown error occurred'
            };
        }
    }
}

//Register with email, password and set displayName
export const registerWithEmailPassword = async ({ email, password, displayName }:RegisterType) => {
    try {
        
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        //Update display name for user
        FirebaseAuth.currentUser && await updateProfile(FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (error:unknown) {
        if (error instanceof Error) {
            return {
                ok: false,
                error: error.message
            };
        } else {
            return {
                ok: false,
                error: 'Unknown error occurred'
            };
        }
    }
}

//Login with email and password 
export const loginWithEmailPassword = async ({ email, password }:LoginType) => {

    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = resp.user;
        return {
            ok: true,
            displayName, email, photoURL, uid
        }
    } catch (error:unknown) {
        if (error instanceof Error) {
            return {
                ok: false,
                error: error.message
            };
        } else {
            return {
                ok: false,
                error: 'Unknown error occurred'
            };
        }
    }

}

//Logout
export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}