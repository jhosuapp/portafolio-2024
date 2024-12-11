import { useState } from "react";
import { motion } from "framer-motion";
import { IContainerProps } from "@/models/components/container.model";

const Container = ( { children, className, ...PropSection }: IContainerProps ):JSX.Element=>{
    const [isInView, setIsInView] = useState(false);

    return(
        <motion.section 
            className={ `${className}  ${isInView ? "animate-container" : ""}` }
            onViewportEnter={() => setIsInView(true)} 
            onViewportLeave={() => setIsInView(false)}
            viewport={{ once: true, amount: 0.5 }} 
            { ...PropSection } 
        >
            { children }
        </motion.section>
    );
}

export { Container }