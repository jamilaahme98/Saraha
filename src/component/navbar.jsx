import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-custom navbar-dark bg-dark">
     <div className="container">
    <Link className="navbar-brand" to="home"><img src="logo-workshop.png" width={54} alt='there are img' /> </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      Menu <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link" to="user">Send a Message</Link>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="Register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Login">Login</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar;