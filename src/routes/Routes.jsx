import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Login from '../pages/Authentication/Login'
import Register from '../pages/Authentication/Register'
import Create from '../components/Create'
import ShowAssignment from '../components/ShowAssignment'
import Update from '../components/Update'
import Viewdelitlis from '../components/Viewdelitlis'
import SubmitForm from '../components/SubmitForm'
import MyAttemted from '../components/MyAttemted'
import Pandding from '../components/Pandding'
import GiveMark from '../components/GiveMark'
import PrivateRoute from './PrivateRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/create',
        element: <Create></Create>
      },
      {
        path: '/assignments',
        element: <ShowAssignment></ShowAssignment>
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><Update></Update> </PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/update/${params.id}`).then(res => res.json())
      },
      {
        path: '/view/:id',
        element:  <PrivateRoute><Viewdelitlis></Viewdelitlis></PrivateRoute>,
        // loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/update/${params.id}`).then(res => res.json())
        loader: ({ params }) => fetch(`http://localhost:9000/update/${params.id}`).then(res => res.json())

      }
      ,
      {
        path: '/submit/:id',
        element:  <PrivateRoute><SubmitForm></SubmitForm></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/update/${params.id}`).then(res => res.json())
      },
      {
        path: '/myAttemted',
        element: <PrivateRoute><MyAttemted></MyAttemted> </PrivateRoute>
      },
      {
        path: '/allpandding',
        element:  <PrivateRoute><Pandding></Pandding></PrivateRoute>,
        loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/submitted`).then(res=>res.json())
      },
      {
        path: '/givemark/:id',
        element:  <PrivateRoute><GiveMark></GiveMark></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/submitted/${params.id}`).then(res => res.json())
      }

      
      
    ],
  },
])

export default router
