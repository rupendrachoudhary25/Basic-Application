import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
       <nav>
       <h1>
            <Link to="/">Home</Link>
        </h1>
        <ul>
            <Link to="/products">Products</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact Us</Link>
        </ul>
       </nav>
    </header>
  )
}

export default Header