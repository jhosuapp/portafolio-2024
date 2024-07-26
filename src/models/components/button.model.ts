import type { ButtonHTMLAttributes } from 'react'

export type ICustomPropsButton = {
    className?: string;
    Text: string;
    HoverText: string;
}

export type INativePropsButton = ButtonHTMLAttributes<HTMLButtonElement>;

export type IButtonProps = ICustomPropsButton & INativePropsButton;