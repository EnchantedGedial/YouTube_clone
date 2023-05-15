import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
   <nav className="navbar navbar-expand-lg " style={{backgroundColor: "#e3f2fd"}}>
  <div className="container-fluid">
    <a className="navbar-brand" style={{fontSize: "35px"}} href="#">YouTube</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to ="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"to ="/codewithharry">Code With Harry</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ="/warikoo ">Ankur WariKoo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ="/ApnaCollege">Apna College</Link>
        </li>
       
        
      </ul>
    </div>
  </div>
</nav>
      
    </>
  )
}

export default NavBar
