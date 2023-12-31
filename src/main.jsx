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
import Dashboard from './Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import SelectedClass from './Dashboard/Students/SelectedClass';
import EnrolledClass from './Dashboard/Students/EnrolledClass';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AdminHome from './Dashboard/Admin/AdminHome';
import AllUsers from './Dashboard/Admin/AllUsers';
import AllClasses from './Dashboard/Admin/AllClasses';
const queryClient = new QueryClient()


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
        loader: () => fetch('https://b712-summer-camp-server-side-chi.vercel.app/classes')
      },
      {
        path: '/instructors',
        element: <Instructors></Instructors>,
      }
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: '/dashboard/selectedClass',
        element: <SelectedClass></SelectedClass>
      },
      {
        path: '/dashboard/enrolledClass',
        element: <EnrolledClass></EnrolledClass>
      },
      {
        path: '/dashboard/adminhome',
        element: <AdminHome></AdminHome>
      },
      {
        path: '/dashboard/allusers',
        element: <AllUsers></AllUsers>
      },
      {
        path: '/dashboard/allclasses',
        element: <AllClasses></AllClasses>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProviders>
        <QueryClientProvider client={queryClient}>
          <div className='max-w-screen-xl		mx-auto'>
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </AuthProviders>
    </HelmetProvider>
  </React.StrictMode>,
)
