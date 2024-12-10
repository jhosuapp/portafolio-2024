import { useState } from "react";
import { motion } from "framer-motion";
import { IInputProps } from '@/models';

const Input = ({ delayAnimation, errorMessage, ...props }:IInputProps ):JSX.Element => {
    const [isInView, setIsInView] = useState(false);

    return (
        <>
            <motion.input 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }} 
                transition={{ duration: 0.5, ease: "easeOut", delay: delayAnimation || 0 }} 
                onViewportEnter={() => setIsInView(true)} 
                onViewportLeave={() => setIsInView(false)}
                viewport={{ once: true, amount: 0.5 }} 
                { ...props } 
            />
            {errorMessage && <span className='error'> { errorMessage } </span>}
        </>
    )
}

export { Input }