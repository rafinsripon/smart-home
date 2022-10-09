import { createBrowserRouter } from "react-router-dom";
import Root from "./layouts/Root";
import { productsAndCartData } from "./loaders/GetCartAndProductData";
import About from "./pages/About";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: productsAndCartData,
        children: [
          { index: true, element: <Home /> },
        //   { path: '/home', element: <Home /> },
          { path: '/shop', element: <Shop /> },
          { path: '/cart', element: <Cart /> },
          { path: '/about', element: <About /> },
        ],
      },
])