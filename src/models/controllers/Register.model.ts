import * as yup from "yup";

export const RegisterSchema = yup.object({
    displayName: yup.string().required('The field is required.'),
    email: yup.string().email('The email is not valid').required('The field is required.'),
    password: yup.string().required('The field is required.').min(8, "The password must be at least 8 characters long.")
});

export type RegisterType = yup.InferType<typeof RegisterSchema>;