import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import ProtectedRoute from './rooting/protectedRoute/ProtectedRoute.js'

import Root from './rooting/root/Root.js'
import Home  from './pages/home/Home.js'
import Login  from './pages/login/Login.js'
import PageError  from './pages/pageError/PageError.js'
import User  from './pages/user/User.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path:'*',
        element: <PageError />
      },
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/user',
        element: (
           /* On enveloppe la route "User" avec ProtectedRoute pour limiter l'accès uniquement à la connexion de l'utilisateur*/
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        ),
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
