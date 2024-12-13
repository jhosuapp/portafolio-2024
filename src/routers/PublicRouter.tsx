import { HomeScreen, ContactScreen, LoginScreen, RegisterScreen, SalomeScreen } from '../screens';

const PublicRouter = [
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
        element: <LoginScreen />,
    },
    {
        path: "/register",
        element: <RegisterScreen />,
    },
    {
        path: "/danita",
        element: <SalomeScreen />,
    },
];

export { PublicRouter }
