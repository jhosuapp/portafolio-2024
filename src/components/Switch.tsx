import { useState } from "react";
import { motion } from "framer-motion";
import { ISwitch } from '../models/index';

const Switch = ({ text }:ISwitch):JSX.Element => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => setIsOn(!isOn);

    return (
        <div className="switch-container">
            <p>{ text } ({isOn ? 'on' : 'off'})</p>
            <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
                <motion.div className="handle" layout transition={spring} />
            </div>
        </div>
    )
}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};  

export { Switch }