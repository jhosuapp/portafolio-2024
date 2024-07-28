import { useState, useEffect } from 'react';
import { IDelay } from '../models';

const Delayed = ({ children, delay }:IDelay) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return show ? children : null;
};

export { Delayed };