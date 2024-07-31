import { useState, useEffect } from 'react';
import { IDelay } from '../models';
import { useDelay } from '../store';

const Delayed = ({ children }:IDelay) => {
    const [show, setShow] = useState(false);
    const { delay } = useDelay(state => state);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return show ? children : null;
};

export { Delayed };