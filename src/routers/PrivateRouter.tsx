import { Navigate } from 'react-router-dom';
import { HomeScreen, ContactScreen, SalomeScreen } from '../screens';

const PrivateRouter = [
    {
        path: "/",
        element: <HomeScreen />,
    },
    {
        path: "/contact",
        element: <ContactScreen />,
    },
    {
        path: "/login",
        element: <Navigate to="/" />,
    },
    {
        path: "/register",
        element: <Navigate to="/" />,
    },
    {
        path: "/jd",
        element: <SalomeScreen />,
    },
];

export { PrivateRouter }
