import { createContext, useEffect, useState } from "react";
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
import Home from "./components/Home/Home";
import Account from "./components/Account/Account";
import { getUsers } from "./components/Utils/Crud.mjs";


export const AppContext=createContext()
function App() {
  const [user,setUser]=useState(getUserFromSorage())
  const [users,setUsers]=useState([])
  useEffect(()=>{
   getUsers().then(data=>{
    setUsers(data)
    // //update current user 
    // //use it 'cause we don't 
    // if(user)
    // {
    //   const u=data.find(f=>f.id===user.id)
    //   setUser(u)
    // }
   })

  },[])
  const generateChildrenRoute=()=>{
    const userChildren=[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/settings",
       element:<Settings/>
      },
      {
        
        path:'/account/:id?',
        element: <Account />,
      }
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
      
      element:(<div className="center"><h1>Not Found 404</h1></div>)
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
    login:(user)=>LogIn(user,setUser,users),
    signUp:(user)=>createAccount(user,users),
    users:users
  }}>
    <RouterProvider router={router}/>
  </AppContext.Provider>
}

export default App;
