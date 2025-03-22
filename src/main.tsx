import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'
import Login from './pages/Login/Login.tsx'
import Home from './pages/Home/Home.tsx'
import Signup from './pages/Signup/Signup.tsx'
import { Provider } from 'react-redux'
import store from './store/store.ts'
import Admin from "./pages/Admin/Admin.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/signup" replace /> // Перенаправление на /signup
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: "/admin",
    element: <Admin />
  }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StrictMode>,
);