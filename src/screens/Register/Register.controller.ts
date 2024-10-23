import { useState } from "react";
//Redux
// import { checkingAuth, startGoogleSignIn } from "@/store/slices/Auth";
// import { useAppDispatch, useAppSelector } from "@/hooks";
// import { Dispatch } from "@reduxjs/toolkit";
//Hooks && models
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema, RegisterType } from "@/models";

export function useRegisterController() {
    const [disabledButton, setDisabledButton] = useState<boolean>(false);
    //Hooks and methods
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterType>({
        mode: "onChange",
        resolver: yupResolver(RegisterSchema),
        defaultValues: {
            full_name: "",
            email: "",
            password: ""
        },
    });
    //Handle submit with email and pass
    const onSubmit = async (formData:RegisterType)=>{
        setDisabledButton(true);
        console.log(formData);
        try {
        }catch(error) {
        }
    }

    return {
        control, 
        handleSubmit,
        onSubmit,
        errors,
        disabledButton,
    }
}