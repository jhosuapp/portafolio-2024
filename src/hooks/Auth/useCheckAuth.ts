import { useEffect } from "react";
import { login, logout } from '@/store/slices/Auth';
import { Dispatch } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "@/hooks";
//Firebase
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '@/firebase/config';

const useCheckAuth = () => {
    const dispatch:Dispatch<any> = useAppDispatch();
    //Validate if user is logged
    useEffect(()=> {
        onAuthStateChanged( FirebaseAuth, async (user) => {
            if(!user) return dispatch(logout(''));
            const { uid, email, displayName, photoURL } = user;
            dispatch(login({ uid, email, displayName, photoURL }));
        });
    }, []);

    const { status } = useAppSelector( state => state.auth );

    return {
        status
    }
}

export { useCheckAuth }