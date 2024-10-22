import type { ButtonHTMLAttributes } from 'react'

export type ICustomPropsButton = {
    className?: string;
    Text: string;
    HoverText: string;
    isDisabled?: boolean;
    isLoading?: boolean;
}

export type INativePropsButton = ButtonHTMLAttributes<HTMLButtonElement>;

export type IButtonProps = ICustomPropsButton & INativePropsButton;