import React, { useEffect, useReducer } from "react";
import { motion } from "framer-motion";
import { ISwitch } from '../models/index';
import { switchReducer } from '../reducers/index';
import { switchAction } from "../models/index";
import { variantSwitch } from '../variants/index';

const Switch = React.memo(({ text, id }:ISwitch):JSX.Element => {
    //Reducer
    const [ state, dispatch ] = useReducer(switchReducer, false);
    //Validate
    useEffect(()=>{
        const action:switchAction = {
            type: '[SWITCH] enable/disable',
            payload: {
                status: localStorage.getItem(id) ? JSON.parse(localStorage.getItem(id)!) : false,
                id: id
            }
        }
        dispatch(action);
    },[]);
    //Handle
    const handleSwitch = ()=>{
        const action:switchAction = {
            type: '[SWITCH] enable/disable',
            payload: {
                status: !state,
                id: id
            },
        }
        dispatch(action);
    }

    return (
        <div className="switch-container">
            <p>{ text } ({state ? 'on' : 'off'})</p>
            <div className="switch" data-ison={state} onClick={ handleSwitch }>
                <motion.div className="handle" layout transition={ variantSwitch } />
            </div>
        </div>
    )
});

export { Switch }