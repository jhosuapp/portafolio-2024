import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PublicRouter } from './PublicRouter';
import { PublicLayout } from "../layouts";
  
const AppRouter = () => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <PublicLayout />,
          children: PublicRouter,
        }
    ]);

    return (
      <RouterProvider router={router} />
    );
}

export { AppRouter }