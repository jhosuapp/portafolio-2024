import { useEffect, useState } from "react";
import { useSpring } from "framer-motion";
import { useMediaQuery } from "@/hooks";

export function useHomeVisionController() {

    const images = [
        "https://150porciento.com/wp-content/uploads/2024/01/Loading-1.jpg",
        "https://150porciento.com/wp-content/uploads/2024/01/Loading-1.jpg",
        "https://150porciento.com/wp-content/uploads/2024/01/Loading-1.jpg",
        "https://150porciento.com/wp-content/uploads/2024/01/Loading-1.jpg",
        "https://150porciento.com/wp-content/uploads/2024/01/Loading-1.jpg",
        "https://150porciento.com/wp-content/uploads/2024/01/Loading-1.jpg",
        "https://150porciento.com/wp-content/uploads/2024/01/Loading-1.jpg",
    ];

    const isDesk = useMediaQuery({breakpoint: 991 });
    const [scrollOffset, setScrollOffset] = useState(0);
    const [isInView, setIsInView] = useState(false);

    const smoothX = useSpring(0, {
        damping: 20,
        restDelta: 0.001,
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrollOffset(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        smoothX.set(scrollOffset * -0.5); 
    }, [scrollOffset, smoothX]);

    const maxDrag = -((window.innerWidth / (isDesk ? 3 : 2)) * (images.length - 3.2));
    const width = (isDesk ? 30 : 50) * (images.length + 1);

    return{
        maxDrag,
        width,
        isDesk,
        smoothX,
        images,
        isInView, 
        setIsInView
    }

}