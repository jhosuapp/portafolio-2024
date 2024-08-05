import { motion } from 'framer-motion';
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
        <>
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
                key={ location.key }
                initial={ { opacity: 0 } }
                animate={ { opacity: 1 } }
                transition={ { duration: 0 } }
            >
                <motion.p
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    style={{ originY: 1 }}
                >
                    LOADING
                </motion.p>
            </motion.div>
        </>
    );
};

export { Transition };