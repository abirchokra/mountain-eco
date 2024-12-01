import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root';

import Cards from './component/Cards';
import Details from './pages/Details';
import Error from './component/Error';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AuthProvider from './Provider/AuthProvider';
import MyProfile from './pages/MyProfile';
import Contact from './component/Contact';
import ResetPass from './pages/ResetPass';
import Update from './pages/Update';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {

        path: '/',
        element: <Cards></Cards>,


      },
    ],

  },
  {
    path: '/details/:id',
    element: <Details></Details>,
    loader: async ({ params }) => {
      const response = await fetch('mountain.json');
      const data = await response.json();
      return data.find(card => card.id === params.id);

    },
  },
  {
    path: 'login',
    element: <Login></Login>,

  },
  {
    path: 'signup',
    element: <Signup></Signup>,
  },
  {
    path: 'myProfile',
    element: <MyProfile></MyProfile>,
  },
  {

    path: 'contact',
    element: <Contact></Contact>,

  },
  {
    path: 'resetPass',
    element: <ResetPass></ResetPass>,
  },
  {
    path: 'update',
    element: <Update></Update>,
  }



]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />

    </AuthProvider>

  </StrictMode>,
)
