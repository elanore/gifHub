import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Category from "./pages/Category";
import  Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import  Search from "./pages/Search";
import  GifPage from "./pages/GifPage";
import GifProvider from "./context/Contextgif";

import "./App.css";


const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:category",
        element: <Category />,
      },
     
      {
        path: "/search/:query",
        element: <Search />,
      },
    {
      path: "/fav",
      element: <Favourites/>
    },
      {
        path: "/:type/:slug",
        element: <GifPage />,
      },
    ],
  },
]);

function App() {
  return 
  // eslint-disable-next-line no-unreachable
  <GifProvider>
    <RouterProvider router={router} />;
  </GifProvider>;
}

export default App;
