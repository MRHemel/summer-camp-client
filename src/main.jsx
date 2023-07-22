import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Classes from './Pages/Classes';
import Instructors from './Pages/Instructors';
import AuthProviders from './providers/AuthProviders';
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/classes',
        element: <Classes></Classes>,
        loader: () => fetch('http://localhost:5000/classes')
      },
      {
        path: '/instructors',
        element: <Instructors></Instructors>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProviders>
        <div className='max-w-screen-xl		mx-auto'>
          <RouterProvider router={router} />
        </div>
      </AuthProviders>
    </HelmetProvider>
  </React.StrictMode>,
)
