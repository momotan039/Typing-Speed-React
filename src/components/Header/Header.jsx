import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AppContext } from '../../App'
import './Header.css'
export default function Header() {
  const app=useContext(AppContext)
  return (
    <header className='card'>
        <div className="logo jello">
            <Link to='/'>
            <h1>Typing <img src="/images/typing.png"/> Speed</h1>
            </Link>
        </div>
        {
          app.user&&<>
          <nav className={`menu`}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/settings'>Settings</NavLink>
            <NavLink to='/account'>Account</NavLink>
            <button onClick={app.logout}>LogOut</button>
          </nav>
          </>
        }
    </header>
  )
}

