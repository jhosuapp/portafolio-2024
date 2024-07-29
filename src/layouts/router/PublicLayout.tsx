
//React hooks
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
//Components and store
import { Header } from '../index';
import { Transition, ProgressBar, Loader } from '../../components';
import { useLoader } from '../../store';

const PublicLayout = ():JSX.Element =>{

    const { isLoad, setIsLoad, loaderComponent } = useLoader(state => state);
    const [counter, setCounter] = useState<number>(100);

    useEffect(()=>{
        window.addEventListener('load', ()=>{
            setIsLoad();
            setCounter(1);
        });
    }, []);

    console.log(loaderComponent);

    return(
        <>
            {!loaderComponent && <Loader counter={ counter } />}

            <Transition />

            <ProgressBar />

            <Header />
            
            {isLoad && <Outlet />} 
        </>
    );
}

export { PublicLayout }