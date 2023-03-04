import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Paragraph } from './components/Paragraph/Paragraph'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root'
import Settings from './components/settings/Settings'
function App() {

  const router=createBrowserRouter([
    {
      path:'/',
      element:<Root/>,
      children:[
        {
          path:'/',
          element:<Paragraph/>,
        },
        {
          path:'/settings',
          element:<Settings/>,
        }
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App
