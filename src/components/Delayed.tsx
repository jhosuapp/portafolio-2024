import { useState, useEffect } from 'react';
import { IDelay } from '@/models';
import { useAppSelector } from '@/hooks';


const Delayed = ({ children }:IDelay) => {
    const [show, setShow] = useState(false);
    const { delay } = useAppSelector( state => state.delay );

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return show ? children : null;
};

export { Delayed };