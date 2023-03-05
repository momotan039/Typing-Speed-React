import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Paragraph } from "./components/Paragraph/Paragraph";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Settings from "./components/settings/Settings";
import User, { LogIn, LogOut } from "./components/Utils/User.mjs";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp";


export const AppContext=createContext()
function App() {
  const [user,setUser]=useState(new User()),
  const [errorUser,setErrorUser]=useState('')
  const generateChildrenRoute=()=>{
    const userChildren=[
      {
        path: "/",
        element: <Paragraph />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ]
    const guestChildren=[
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      }
    ]
    const res=user?userChildren:guestChildren
    res.push({
      path:'*',
      element:<h1>Not Found 404</h1>
    })
    return res
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: generateChildrenRoute(),
    },
  ]);
  return <AppContext.Provider value={{
    user:user,
    logout:()=>LogOut(setUser),
    login:(user)=>LogIn(user,setUser,setErrorUser)
  }}>
    <RouterProvider router={router}/>
  </AppContext.Provider>
}

export default App;
