import { HTMLAttributes } from 'react';

type PropsNative =  HTMLAttributes<HTMLElement>;

export type INativePropsText = {
    headingType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
    textContent?: string[];
    children?: React.ReactNode;
    delayAnimation?: number;
}

export type ITextProps = PropsNative & INativePropsText;