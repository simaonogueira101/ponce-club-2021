import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  render() {
    return (
      <nav role="navigation" aria-label="main-navigation">
        <Link to="/about">
          About
        </Link>
        <Link to="/products">
          Products
        </Link>
        <Link to="/blog">
          Blog
        </Link>
        <Link to="/contact">
          Contact
        </Link>
        <Link to="/contact/examples">
          Form Examples
        </Link>
      </nav>
    )
  }
}

export default Navbar
