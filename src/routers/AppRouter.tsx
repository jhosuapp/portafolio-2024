import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PublicRouter } from './PublicRouter';
import { PrivateRouter } from "./PrivateRouter";
import { PublicLayout } from "../layouts";
import { useCheckAuth } from "@/hooks";
  
const AppRouter = () => {
    //User status
    const { status } = useCheckAuth();
    //Public router
    const publicRouter = createBrowserRouter([
        {
          path: "/",
          element: <PublicLayout />,
          children: PublicRouter,
        }
    ]);
    //Private router
    const privateRouter = createBrowserRouter([
        {
          path: "/",
          element: <PublicLayout />,
          children: PrivateRouter,
        }
    ]);

    return (
      <RouterProvider router={status === 'auth' ? privateRouter : publicRouter} />
    );
}

export { AppRouter }