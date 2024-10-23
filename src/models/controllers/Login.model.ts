import * as yup from "yup";

export const LoginSchema = yup.object({
    email: yup.string().email('The email is not valid').required('The field is required'),
    password: yup.string().required('The field is required')
});

export type LoginType = yup.InferType<typeof LoginSchema>;