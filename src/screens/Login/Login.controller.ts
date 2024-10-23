import { useEffect, useState } from "react";
//Redux
import { checkingAuth, startGoogleSignIn } from "@/store/slices/Auth";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Dispatch } from "@reduxjs/toolkit";
//Hooks && models
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema, LoginType } from "@/models";

export function useLoginController() {
    const dispatch:Dispatch<any> = useAppDispatch();
    const [disabledButton, setDisabledButton] = useState<boolean>(false);
    const { status } = useAppSelector( state => state.auth );
    //Status request
    useEffect(()=>{
        status === 'checking' ? setDisabledButton(true) : setDisabledButton(false);
    }, [status]);
    //Hooks and methods
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginType>({
        mode: "onChange",
        resolver: yupResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });
    //Handle submit with email and pass
    const onSubmit = async (formData:LoginType)=>{
        dispatch(checkingAuth(formData.email, formData.password));
    }
    //Handle click with google sign in
    const handleGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
    }

    return {
        control, 
        handleSubmit,
        onSubmit,
        errors,
        disabledButton,
        handleGoogleSignIn
    }
}