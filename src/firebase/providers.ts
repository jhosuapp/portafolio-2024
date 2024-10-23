import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";
import { RegisterType } from "@/models";

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