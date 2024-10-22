import { HTMLAttributes } from 'react';

type PropsNative =  HTMLAttributes<HTMLElement>;

export type INativePropsText = {
    children: React.ReactNode;
    headingType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
}

export type ITextProps = PropsNative & INativePropsText;