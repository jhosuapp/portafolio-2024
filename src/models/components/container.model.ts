import { ReactNode, HTMLAttributes } from 'react';
import type { MotionProps } from "framer-motion";
//Custom types
type ICustomPropsContainer = HTMLAttributes<HTMLElement>;
type INativePropsContainer = { 
    children: ReactNode;
    className?: string;
}

export type IContainerProps = ICustomPropsContainer & INativePropsContainer & MotionProps;