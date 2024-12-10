import type { ButtonHTMLAttributes } from 'react';
import type { MotionProps } from "framer-motion";

export type ICustomPropsButton = {
    className?: string;
    Text: string;
    HoverText: string;
    isDisabled?: boolean;
    isLoading?: boolean;
    delayAnimation?: number;
}

export type INativePropsButton = ButtonHTMLAttributes<HTMLButtonElement>;

export type IButtonProps = ICustomPropsButton & ButtonHTMLAttributes<HTMLButtonElement> & MotionProps;