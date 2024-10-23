import * as yup from "yup";

export const RegisterSchema = yup.object({
    full_name: yup.string().required('The field is required'),
    email: yup.string().email('The email is not valid').required('The field is required'),
    password: yup.string().required('The field is required')
});

export type RegisterType = yup.InferType<typeof RegisterSchema>;