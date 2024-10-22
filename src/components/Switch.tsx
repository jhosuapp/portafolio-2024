import React, { useEffect, useReducer } from "react";
import { motion } from "framer-motion";
import { ISwitch } from '../models/index';

const Switch = React.memo(({ text, id }:ISwitch):JSX.Element => {

    console.log(text, id);

    return (
        <div className="switch-container">
            {/* <p>{ text } ({state ? 'on' : 'off'})</p>
            <div className="switch" data-ison={state} onClick={ handleSwitch }>
                <motion.div className="handle" layout transition={ variantSwitch } />
            </div> */}
        </div>
    )
});

export { Switch }