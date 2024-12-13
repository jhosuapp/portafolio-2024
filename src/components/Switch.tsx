import React, { useEffect } from "react";
//Redux
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Dispatch } from "@reduxjs/toolkit";
import { setMode } from "@/store/slices/Switch";
//Other components
import { motion } from "framer-motion";
import { ISwitch } from '../models/index';
import { variantSwitch } from "@/variants";
import switchOn from '/assets/audio/switch-on.mp3';
import switchOff from '/assets/audio/switch-off.mp3';

const Switch = React.memo(({ text, id }:ISwitch):JSX.Element => {
    const dispatch:Dispatch<any> = useAppDispatch();
    const { modes } = useAppSelector(state => state.switch);
    const { status } = useAppSelector(state => state.sound);
    //Validate if mode is enable
    useEffect(()=>{
        const body = document.body;
        if(body){
            modes[id] ? body.classList.add(id) : body.classList.remove(id);
        }
    },[modes]);
    //Update state
    const handleSwitch = () =>{
        dispatch(setMode(!modes[id]));
        status && new Audio(modes[id] ? switchOn : switchOff).play();
    }

    return (
        <div className="switch-container">
            <p>{ text } ({modes[id] ? 'on' : 'off'})</p>
            <div className="switch" data-ison={modes[id]} onClick={ handleSwitch }>
                <motion.div className="handle" layout transition={ variantSwitch } />
            </div>
        </div>
    )
});

export { Switch }