
import { Outlet } from 'react-router-dom';
import { Header } from '../index';

const PublicLayout = ():JSX.Element =>{
    return(
        <>
            <Header />
            <Outlet />
        </>
    );
}

export { PublicLayout }