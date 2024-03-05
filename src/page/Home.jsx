import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.css";


export default function Home() {
  return (
    <nav className='nav-menu'>
        <Link to="/add">
            Go to Add page
        </Link>
        <Link to="/list">
            Go to List page
        </Link>
    </nav>
  )
}
