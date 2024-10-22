import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ILoader } from '@/models';
import { setLoaderComponent } from '@/store/slices/Loader';
import { useAppDispatch } from '@/hooks';
import { Dispatch } from '@reduxjs/toolkit';


const Loader = ({ counter }:ILoader):JSX.Element => {
    const dispatch: Dispatch<any> = useAppDispatch();
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);
    const nodeCounter = useRef<HTMLParagraphElement>(null);
    const nodeProgress =  useRef<HTMLSpanElement>(null);
    //Animation counter
    useEffect(() => {
      const animation = animate(count, 100, { duration: counter });
  
      return animation.stop;
    }, [counter]);
    //Animation progressbar
    useEffect(() => {
        const intervalId = setInterval(() => {
            //Validate if exists node in html
            if(nodeCounter.current && nodeCounter.current.textContent){
                nodeProgress.current && (nodeProgress.current.style.width = `${nodeCounter.current?.textContent}%`);
            }
            //Clear interval
            if (nodeCounter.current?.textContent == '100') {
                clearInterval(intervalId);
                setTimeout(()=>{
                    dispatch(setLoaderComponent());
                },1000);
            }
        }, 100);
        //Amount component
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className='loader'>
            <div className='loader__bg'></div>
            <motion.div 
                className='loader__progress'
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '100%', opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
                <span
                    ref={ nodeProgress }
                ></span>
            </motion.div>
            <motion.p 
                key={ nodeCounter.current?.textContent }   
                ref={ nodeCounter }
                className='loader__counter'
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '100%', opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{ originY: 1 }}
            >
                { rounded }
            </motion.p>
        </section>
    )
}

export { Loader }