import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {
  Home, Shop, About, Blog
} from './pages/index.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<Blog />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
    <RouterProvider router={router} />
  // </Provider>
    
)
