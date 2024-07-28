
//React hooks
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
//Components and store
import { Header } from '../index';
import { Transition, ProgressBar } from '../../components';
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

            <ProgressBar />

            <Header />
            
            {isLoad && <Outlet />} 
        </>
    );
}

export { PublicLayout }