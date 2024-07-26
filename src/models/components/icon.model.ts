import type { ImgHTMLAttributes } from 'react'

export type ICustomPropsIcon = {
    src: string;
    width: number;
    height: number;
    alt: string;
}

export type INativePropsIcon = ImgHTMLAttributes<HTMLImageElement>;

export type IIconProps = ICustomPropsIcon & INativePropsIcon;