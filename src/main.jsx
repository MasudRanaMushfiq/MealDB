import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home.jsx'
import CategoryPage from './CategoryPage.jsx'
import ItemDetails from './ItemDetails.jsx'

const router = createBrowserRouter (
  createRoutesFromElements (
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='/:category' element={<CategoryPage/>} />
      <Route path='/meal/:mealid' element={<ItemDetails/>} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
