import { HomeScreen, ContactScreen, LoginScreen, RegisterScreen } from '../screens';

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
];

export { PublicRouter }
