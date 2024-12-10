import { useState } from 'react';
import { motion } from "framer-motion";
import { ITextProps } from '@/models';

const Text = ({ textContent, children, headingType, className, delayAnimation, ...attributes }: ITextProps): JSX.Element => {
    const [isInView, setIsInView] = useState(false);
    const Tag = headingType || 'p';

    return (
        <motion.div
            className={`general-text ${isInView ? "animate-text" : ""}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }} 
            transition={{ duration: 0.5, ease: "easeOut", delay: delayAnimation || 0 }} 
            onViewportEnter={() => setIsInView(true)} 
            onViewportLeave={() => setIsInView(false)}
            viewport={{ once: true, amount: 0.5 }} 
        >
            <Tag 
                className={`${Tag === 'p' ? 'paragraph' : 'title'} ${className}`} 
                {...attributes}
            >
                {children}
                {textContent && textContent.map((data, index) => {
                    const delay = index >= 10 ? `${Math.floor(index / 10)}.${index % 10}s` : `0.${index}s`;
                    return (
                        <span 
                            style={{ transitionDelay: delay }} 
                            key={index + data}
                        >
                            {data}
                        </span>
                    );
                })}
            </Tag>
        </motion.div>
    );
};

export { Text }