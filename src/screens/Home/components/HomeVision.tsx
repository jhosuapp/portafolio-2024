import { motion } from "framer-motion";
import { useHomeVisionController } from "./HomeVision.controller";
import { Container } from "@/components/index";



const HomeVision = ():JSX.Element => {
    const { isDesk, maxDrag, smoothX, width, images, isInView, setIsInView } = useHomeVisionController();

    return (
        <>
            {isDesk && 
                <Container className="ctn ctn--top ctn--top-mobile home-vision">
                    <motion.article
                        className={isInView ? "animate-title" : ""}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }} 
                        transition={{ duration: 0.8, ease: "easeOut" }} 
                        onViewportEnter={() => setIsInView(true)} 
                        onViewportLeave={() => setIsInView(false)}
                        viewport={{ once: true, amount: 0.5 }} 
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
                </Container>
            }
            <Container className="home-vision-carrousel">
                <motion.article
                    className="home-vision-carrousel__container"
                    drag="x"
                    dragConstraints={{ left: maxDrag, right: 0 }}
                    style={{
                        x: smoothX,
                        width: `${width}vw`,
                    }}
                >
                    {images.map((src, index) => (
                        <motion.article
                            key={index}
                            className="home-vision-carrousel__item"
                        >
                            <img
                                src={ src }
                                alt={`Image ${index}`}
                                style={{ transitionDelay: `0.${index + 5}s` }}
                            />
                        </motion.article>
                    ))}
                </motion.article>
            </Container>
        </>
    )
}

export { HomeVision }