import { useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import './App.css';

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
        path: "/:favourites",
        element: <Favourites />,
      },
      {
        path: "/search/:query",
        element: <Search />,
      },
      {
        path: "/:type/:slug",
        element: <GifPage />,
      },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <h1>Hello Shiny</h1>
      </div>
      
   
  )
}

export default App
