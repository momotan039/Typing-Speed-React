import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import Spinner from "../Spinner/Spinner";
import { saveUserToSorage } from "../Utils/LocalStorage.mjs";

export default function SignUp() {
    const app=useContext(AppContext)
    const nav=useNavigate()
    const [errors, setErrors] = useState({});
    const [showSpinner,setShowSpinner]=useState(false)
    const formData={}

    const changeForm=(event)=>{
        const input=event.target
        formData[input.name]=input.value
    }

    const signUpUser=async ()=>{
        event.preventDefault()
        const validationErrors = {};
        if (!formData.name) {
            validationErrors.name = "Name is required";
          }

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
        await app.signUp(formData).then((res)=>{
          saveUserToSorage(res)
          app.login(res)
        }).catch((err)=>{
          setErrors({user:err})
          return
        })

        setTimeout(() => {
          nav('/')
          setShowSpinner(false)
        }, 2000);
    }
  return (
    <div className="center">
      <div className="card jello">
        <div className="head">
        <h1>Sign up</h1>
        </div>
        <div className="content">
            <form action="">
            {
          errors.user&&<div className="error jello">{errors.user}</div>
        }
            <div className="row">
                <h3>Name:</h3>
                <input required name="name" onChange={changeForm} type="email"/>
            </div>
            {errors.name && <div className="jello error">{errors.name}</div>}
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
                <button onClick={signUpUser}>Sign Up</button>
                <Link to={'/'}>Sign In</Link>
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
