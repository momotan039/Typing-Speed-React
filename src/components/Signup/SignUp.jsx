import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="card jello">
        <div className="head">
        <h1>Sign up</h1>
        </div>
        <div className="content">
            <div className="row">
                <h3>UserName</h3>
                <input type="text"/>
            </div>
            <div className="row">
                <h3>Email</h3>
                <input type="email"/>
            </div>
            <div className="row">
                <h3>Password</h3>
                <input type="password"/>
            </div>
            <div className="btns">
                <button>Sign Up</button>
                <button><Link to={'/'}>Login</Link></button>
            </div>
        </div>
    </div>
  )
}
