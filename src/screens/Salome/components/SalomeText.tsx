import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const SalomeText = ():JSX.Element => {
    const words = ["¡Te amo!", "Eres mi mundo", "Mi razón de ser", "Mi todo"]; 
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: 20 }} 
            transition={{ duration: 0.8 }} 
            className="salome-text"
        >
            {words[index]}
        </motion.div>
    );
};

export { SalomeText }