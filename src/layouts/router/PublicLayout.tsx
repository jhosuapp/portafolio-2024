
//React hooks
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
//Components and store
import { Header, Footer } from '../index';
import { Transition, ProgressBar, Loader, ScrollSmoth } from '../../components';
import { useLoader } from '../../store';
import { useMediaQuery } from '../../hooks';

const PublicLayout = ():JSX.Element =>{

    const { isLoad, setIsLoad, loaderComponent } = useLoader(state => state);
    const [counter, setCounter] = useState<number>(100);
    const isDesk = useMediaQuery({ breakpoint: 991 });

    useEffect(() => {
        const handleLoadPage = () => {
            setIsLoad();
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

            <ProgressBar />

            <Header />
            
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