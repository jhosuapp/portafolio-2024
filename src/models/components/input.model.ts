import type { InputHTMLAttributes } from 'react';

export type ICustomPropsInput = {
    errorMessage?: string;
}

export type INativePropsInput = InputHTMLAttributes<HTMLInputElement>

export type IInputProps = INativePropsInput & ICustomPropsInput;