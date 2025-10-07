import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Home from './pages/home'
import Packages from './pages/packages'
import './main.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/packages',
    element: <Packages />
  }
])

const root = document.getElementById('root')

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
