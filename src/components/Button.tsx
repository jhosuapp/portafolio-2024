//Types
import { IButtonProps } from '@/models';
import { motion } from "framer-motion";
import { useState } from 'react';

const Button = ( { Text, HoverText, className, isDisabled, isLoading, children, delayAnimation, ...attributes }:IButtonProps ):JSX.Element => {
    const [isInView, setIsInView] = useState(false);

    return (
        <motion.button 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }} 
            transition={{ duration: 0.5, ease: "easeOut", delay: delayAnimation || 0 }} 
            onViewportEnter={ () => setIsInView(true) } 
            onViewportLeave={ () => setIsInView(false) }
            viewport={{ once: true, amount: 0.5 }} 
            className={`
                btn ${className}
                ${isDisabled && 'disabled'}
                ${isLoading && 'loading disabled'}
                ${children && 'direction-row'}
            `}
            { ...attributes }
        >
            { children }
            <div>
                <span>{ Text }</span>
                <span>{ isLoading ? 'Loading...' : HoverText }</span>
            </div>
            <div>
                <b></b>
            </div>
        </motion.button>
    )
}

export { Button }