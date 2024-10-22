import { HomeScreen, ContactScreen, LoginScreen } from '../screens';

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
];

export { PublicRouter }
