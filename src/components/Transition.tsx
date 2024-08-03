import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useDelay } from "../store";

const Transition = () => {
    const { delay } = useDelay(state => state);
    //Get location to dinamic key in motion
    const location = useLocation();
    const nodeTransition = useRef<HTMLDivElement>(null);
    const nodeTransitionLoading = useRef<HTMLDivElement>(null);
    //Remove animation
    useEffect(()=>{
        setTimeout(()=>{
            nodeTransition.current && nodeTransition.current.classList.add('remove-animation');
            nodeTransitionLoading.current && nodeTransitionLoading.current.classList.add('remove-animation');
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
            <motion.div 
                className='slide-loading'
                ref={ nodeTransitionLoading }
                key={ location.pathname }
                initial={ { opacity: 0 } }
                animate={ { opacity: 1 } }
                transition={ { duration: 0 } }
            >
                <p>Cargando</p>
            </motion.div>
        </AnimatePresence>
    );
};

export { Transition };