import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'
import './Header.css'
export default function Header() {
  const app=useContext(AppContext)
  return (
    <header>
        <div className="logo jello">
            <h1>Typing Speed</h1>
        </div>
        {
          app.user&&<>
          <nav className={`menu`}>
            <Link to='/'>Home</Link>
            <Link to='/settings'>Settings</Link>
            <Link to='/account'>Account</Link>
            <button onClick={app.logout}>LogOut</button>
          </nav>
          </>
        }
    </header>
  )
}

