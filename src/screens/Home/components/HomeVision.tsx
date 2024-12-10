import { Container } from "@/components/index";
import { motion } from "framer-motion";
import { useState } from "react";

const HomeVision = ():JSX.Element => {
    const [isInView, setIsInView] = useState(false);

    return (
        <Container className="ctn ctn--top ctn--top-mobile home-vision">
            <motion.article
                className={isInView ? "animate-title" : ""}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }} 
                transition={{ duration: 0.8, ease: "easeOut" }} 
                onViewportEnter={() => setIsInView(true)} 
                onViewportLeave={() => setIsInView(false)}
                viewport={{ once: false, amount: 0.5 }} 
            >
                <h2>
                    <span>Beyond</span>
                    <span>Visions</span>
                </h2>
                <h3>
                    <span>whitin</span>
                    <span>reach</span>
                </h3>
            </motion.article>
            <motion.article>
                <picture>

                </picture>
                <div>
                    <span>Lorem</span>
                    <span>Lorem</span>
                    <span>Lorem</span>
                    <span>Lorem</span>
                    <span>Lorem</span>
                    <span>Lorem</span>
                    <span>Lorem</span>
                    <span>Lorem</span>
                    <span>Lorem</span>
                    <span>Lorem</span>
                    <span>Lorem</span>
                    <span>Lorem</span>
                    <span>Lorem</span>
                </div>
            </motion.article>
        </Container>
    )
}

export { HomeVision }