import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import useLocalStorage from "../Custome Hooks/useLocalStorage";
import Spinner from "../Spinner/Spinner";
import { saveUserToSorage } from "../Utils/LocalStorage.mjs";

export default function Login() {
    const app=useContext(AppContext)
    const [errors, setErrors] = useState({});
    const [showSpinner,setShowSpinner]=useState(false)
    const formData=useRef()
    const  loginUser=async()=>{
        event.preventDefault()
        const validationErrors = {};
       
          if (!formData.email) {
            validationErrors.email = "Email is required";
          }
          if (!formData.password) {
            validationErrors.password = "Password is required";
          }
                
          // check if there are any validation errors
          if (Object.keys(validationErrors).length > 0) {
              setErrors(validationErrors);
              return;
          }
        setShowSpinner(true)
        await app.login(formData).then((res)=>{
          saveUserToSorage(res)
          setShowSpinner(false)
        }).catch((err)=>{
          setErrors({user:err})
        })
        setShowSpinner(false)
    }

    const changeForm=(event)=>{
        const input=event.target
        formData[input.name]=input.value
    }

  return (
    <div className="center">
      <div className="card">
        <div className="head">
        <h1>Login</h1>
        </div>
        <div className="content">
            <form action="">
            {
          errors.user&&<div className="error jello">{errors.user}</div>
        }
            <div className="row">
                <h3>Email:</h3>
                <input required name="email" onChange={changeForm} type="email"/>
            </div>
            {errors.email && <div className="jello error">{errors.email}</div>}
            <div className="row">
                <h3>Password:</h3>
                <input required name="password" onChange={changeForm} type="password"/>
            </div>
            {errors.password && <div className="jello error">{errors.password}</div>}
            <div className="btns">
                <button onClick={loginUser}>Login</button>
                <button><Link to={'/sign-up'}>Sign Up</Link></button>
            </div>
            </form>
        </div>
        {
          showSpinner&&<Spinner/>
        }
    </div>
    </div>
  )
}
