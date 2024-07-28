
//React hooks
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
//Components and store
import { Header } from '../index';
import { Transition } from '../../components';
import { useLoader } from '../../store';

const PublicLayout = ():JSX.Element =>{

    const { isLoad, setIsLoad } = useLoader(state => state);

    useEffect(()=>{
        window.addEventListener('load', ()=>{
            setIsLoad();
        });
    }, []);

    return(
        <>
            <Transition />

            <Header />
            
            {isLoad && <Outlet />} 
        </>
    );
}

export { PublicLayout }