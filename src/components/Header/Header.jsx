import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
export default function Header() {
  return (
    <header>
        <div className="logo">
            <h1>Typing Speed</h1>
        </div>
        <nav className="menu">
            <Link to='/'>Home</Link>
            <Link to='/settings'>Settings</Link>
        </nav>
    </header>
  )
}

