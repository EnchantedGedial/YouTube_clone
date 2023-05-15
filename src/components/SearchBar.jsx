import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useState } from 'react';
const SearchBar = () => {
    const [search, setsearch] = useState()
  return (
    <>
    <form className="d-flex m-5" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <a className="btn btn-outline-success" onClick={()=>{}} >Search</a>
    </form>
      
    </>
  )
}

export default SearchBar
