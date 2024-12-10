import type { InputHTMLAttributes } from 'react';
import type { MotionProps } from "framer-motion";

export type ICustomPropsInput = {
    errorMessage?: string;
    delayAnimation?: number;
}

export type INativePropsInput = InputHTMLAttributes<HTMLInputElement>

export type IInputProps = INativePropsInput & ICustomPropsInput & MotionProps;