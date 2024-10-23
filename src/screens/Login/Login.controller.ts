//Redux
import { checkingAuth } from "@/store/slices/Auth";
import { useAppDispatch } from "@/hooks";
import { Dispatch } from "@reduxjs/toolkit";
//Other hooks
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const login = yup.object({
    email: yup.string().email('The email is not valid').required('The field is required'),
    password: yup.string().required('The field is required')
});

type LoginType = yup.InferType<typeof login>;

export function useLoginController() {
    const dispatch:Dispatch<any> = useAppDispatch();
    const [disabledButton, setDisabledButton] = useState<boolean>(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginType>({
        mode: "onChange",
        resolver: yupResolver(login),
        defaultValues: {
            email: "",
            password: ""
        },
    });
    
    const onSubmit = async (formData:LoginType)=>{
        setDisabledButton(true);
        console.log(formData);
        try {
            dispatch(checkingAuth(formData.email, formData.password));
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