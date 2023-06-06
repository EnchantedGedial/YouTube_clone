import React from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useState } from 'react';

const SearchBar = () => {

  // IDK what the FUCK is use navigate i need to learn this hook in first place
  const navigate = useNavigate();
    const [search, setsearch] = useState();

     const handleSubmit =(e)=>{
      e.preventDefault();
      if(search){
        navigate(`/search/${search}`)
        setsearch('');
      }

    }
  return (
    <>
    <form className="d-flex m-5" role="search">
      <input className="form-control me-2" type="search" value={search} placeholder="Search" onChange={(e)=>{setsearch(e.target.value)}} aria-label="Search"/>
      {console.log(search)}
      <a className="btn btn-outline-success" onClick={handleSubmit} >Search</a>
    </form>
    
      
    </>
  )
}

export default SearchBar
