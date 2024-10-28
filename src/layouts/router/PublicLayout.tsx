
//React hooks
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
//Redux
import { setIsLoad } from '@/store/slices/Loader';
import { Dispatch } from "@reduxjs/toolkit";
//Components and store
import { Header, Footer } from '@/layouts';
import { Transition, ProgressBar, Loader, ScrollSmoth, Cursor, Settings } from '@/components';
import { useAppDispatch, useAppSelector, useMediaQuery } from "@/hooks";

const PublicLayout = ():JSX.Element =>{
    const { isLoad, loaderComponent } = useAppSelector( state => state.loader );
    const dispatch: Dispatch<any> = useAppDispatch()
    const [ counter, setCounter ] = useState<number>(100);
    const isDesk = useMediaQuery({ breakpoint: 991 });
    //Validate if page is load
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