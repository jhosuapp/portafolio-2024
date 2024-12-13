import { useEffect } from 'react';
import { Button } from '@/components';
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Dispatch } from "@reduxjs/toolkit";
import { setHamburger } from "@/store/slices/Header";
import menuOpen from '/assets/audio/menu-open-softer.mp3';
import menuClose from '/assets/audio/menu-close.mp3';

const HeaderButtons = ():JSX.Element => {

    const { hamburger } = useAppSelector( state => state.header );
    const dispatch: Dispatch<any> = useAppDispatch();

    useEffect(()=>{
        new Audio(hamburger ? menuOpen : menuClose).play();
    },[hamburger]);

    return (
        <div className="header__buttons">
            <Button 
                className='btn--primary h-text'
                Text={ `LET'S TALK` }
                HoverText='Do it'
                onClick={ ()=>{
                    console.log('hola');
                } }
            />
            <Button 
                className={`btn--secondary btn--hover-dot ${hamburger ? 'active' : ''}`}
                Text='MENU'
                HoverText='CLOSE'
                onClick={ () => dispatch(setHamburger(!hamburger)) }
            />
        </div>
    )
}

export { HeaderButtons }