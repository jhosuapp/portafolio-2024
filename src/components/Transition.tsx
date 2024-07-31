import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useDelay } from "../store";

const Transition = () => {
    const { delay } = useDelay(state => state);
    //Get location to dinamic key in motion
    const location = useLocation();
    const nodeTransition = useRef<HTMLDivElement>(null);
    const nodeTransitionParagraph = useRef<HTMLDivElement>(null);
    //Remove animation
    useEffect(()=>{
        setTimeout(()=>{
            nodeTransition.current && nodeTransition.current.classList.add('remove-animation');
            nodeTransitionParagraph.current && nodeTransitionParagraph.current.classList.add('remove-animation');
        }, delay);
    }, [location]);

    return (
        <AnimatePresence mode='wait'>
            <motion.div
                className='slide-in'
                ref={ nodeTransition }
                key={ location.pathname }
                initial={ { scaleY: 0 } }
                animate={ { scaleY: 1 } }
                transition={{ duration: 0.5 }}
                >
            </motion.div>
        </AnimatePresence>
    );
};

export { Transition };