
import { Outlet } from 'react-router-dom';
import { Header } from '../index';
import { Transition } from '../../components';

const PublicLayout = ():JSX.Element =>{
    return(
        <>
            <Transition />

            <Header />
            
            <Outlet />
        </>
    );
}

export { PublicLayout }