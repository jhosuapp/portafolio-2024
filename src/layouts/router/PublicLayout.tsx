
//React hooks
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
//Components and store
import { Header, Footer } from '../index';
import { Transition, ProgressBar, Loader, ScrollSmoth, Cursor, Settings } from '@/components';
import { useMediaQuery } from '@/hooks';
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setIsLoad } from '@/store/slices/Loader';
import { Dispatch } from "@reduxjs/toolkit";

const PublicLayout = ():JSX.Element =>{
    const { isLoad, loaderComponent } = useAppSelector( state => state.loader );
    const dispatch: Dispatch<any> = useAppDispatch()
    const [ counter, setCounter ] = useState<number>(100);
    const isDesk = useMediaQuery({ breakpoint: 991 });

    useEffect(() => {
        const handleLoadPage = () => {
            dispatch(setIsLoad());
            setCounter(1);
        };
        //Validate if dom loaded
        if (document.readyState === 'interactive' || document.readyState === 'complete') {
            handleLoadPage();
        } 
        //Unmount listener
        return () => {
            window.removeEventListener('load', handleLoadPage);
        };
    }, [document.readyState]);

    return(
        <>
            {!loaderComponent && <Loader counter={ counter } />}

            <Transition />

            {!isDesk && <ProgressBar />}

            <Header />

            <Settings />

            {isDesk && <Cursor />}
            
            {isLoad && isDesk ? (
                    <ScrollSmoth>
                        <Outlet />
                        <Footer />
                    </ScrollSmoth>
                ) : (
                    <>
                        <Outlet />
                        <Footer/>
                    </>
                )
            } 

        </>
    );
}

export { PublicLayout }