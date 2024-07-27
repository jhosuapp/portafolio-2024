import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PublicRouter } from './PublicRouter';
import { PublicLayout } from "../layouts";
import { AnimatePresence } from "framer-motion";
  
const AppRouter = () => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <PublicLayout />,
          children: PublicRouter,
        }
    ]);

    return (
      <AnimatePresence>
        <RouterProvider router={ router } />
      </AnimatePresence>
    );
}

export { AppRouter }