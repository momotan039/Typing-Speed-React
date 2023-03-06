import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Paragraph } from "./components/Paragraph/Paragraph";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Root from "./components/Root";
import Settings from "./components/settings/Settings";
import { LogIn, LogOut, createAccount } from "./components/Utils/User.mjs";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp";
import { getUserFromSorage } from "./components/Utils/LocalStorage.mjs";


export const AppContext=createContext()
function App() {
  const [user,setUser]=useState(getUserFromSorage())
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
    login:(user)=>LogIn(user,setUser),
    signUp:(user)=>createAccount(user)
  }}>
    <RouterProvider router={router}/>
  </AppContext.Provider>
}

export default App;
