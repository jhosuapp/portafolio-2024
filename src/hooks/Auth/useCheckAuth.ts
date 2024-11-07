import { useEffect } from "react";
import { login, logout } from '@/store/slices/Auth';
import { Dispatch } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "@/hooks";
// Firebase
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '@/firebase/config';

const useCheckAuth = (): { status: string } => {
    const dispatch: Dispatch<any> = useAppDispatch();

    // Validar si el usuario está autenticado
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) {
                dispatch(logout(''));
                return;
            }
            const { uid, email, displayName, photoURL } = user;
            dispatch(login({ uid, email, displayName, photoURL }));
        });

        // Limpieza al desmontar el componente
        return () => unsubscribe();
    }, [dispatch]);

    const { status } = useAppSelector(state => state.auth);

    return {
        status
    };
}

export { useCheckAuth }