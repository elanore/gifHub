import { useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import './App.css';

const router = createBrowserRouter([
  {
    element:<AppLayout/>,

    children: [
      {
        path:'/',
        element:<Home/>
      }
    ]

  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <h1>Hello Shiny</h1>
      </div>
      
   
  )
}

export default App
