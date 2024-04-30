import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Protfolio from './Pages/Protfolio/Protfolio.jsx';
import Contact from './Pages/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />
  },
  {
    path: "/Protfolio",
    element: <Protfolio />
  },
  {
    path: "/Contact",
    element: <Contact />
  }
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

export default App;