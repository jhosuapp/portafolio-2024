import { HomeScreen, Contact } from '../screens';

const PublicRouter = [
    {
        path: "/",
        element: <HomeScreen />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
];

export { PublicRouter }
