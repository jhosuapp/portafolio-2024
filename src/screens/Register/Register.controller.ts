import { useEffect, useState } from "react";
//Redux
import { startCreatingUserWithEmailPassword } from "@/store/slices/Auth";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Dispatch } from "@reduxjs/toolkit";
//Hooks && models
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema, RegisterType } from "@/models";

export function useRegisterController() {
    const dispatch:Dispatch<any> = useAppDispatch();
    const { status, errorMessage } = useAppSelector(state => state.auth);
    const [disabledButton, setDisabledButton] = useState<boolean>(false);
    //Show error when email is invalid
    useEffect(()=>{
        errorMessage && setError('email', { message: 'Email already exists or is invalid' });
    },[errorMessage]);
    //Status request
    useEffect(()=>{
        status === 'checking' ? setDisabledButton(true) : setDisabledButton(false);
    },[status]);
    //Hooks and methods
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors, isValid },
    } = useForm<RegisterType>({
        mode: "onChange",
        resolver: yupResolver(RegisterSchema),
        defaultValues: {
            displayName: "",
            email: "",
            password: ""
        },
    });
    //Handle submit with email and pass
    const onSubmit = async (formData:RegisterType)=>{
        dispatch(startCreatingUserWithEmailPassword(formData))
    }

    return {
        control, 
        handleSubmit,
        onSubmit,
        errors,
        disabledButton,
        errorMessage,
        isValid
    }
}