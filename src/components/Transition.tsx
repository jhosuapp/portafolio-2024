import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Transition = () => {
    const location = useLocation();
    const nodeTransition = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        setTimeout(()=>{
            nodeTransition.current && nodeTransition.current.classList.add('remove-animation');
        },1000);
    }, [location]);

    return (
        <AnimatePresence mode='wait'>
            <motion.div
                className='slide-in'
                ref={ nodeTransition }
                key={ location.pathname }
                initial={ { scaleX: 0 } }
                animate={ { scaleX: 1 } }
                transition={{ duration: 0.5 }}
            />
        </AnimatePresence>
    );
};

export { Transition };