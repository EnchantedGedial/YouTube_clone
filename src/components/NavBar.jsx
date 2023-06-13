import React from 'react'
import { Link } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg';
import SearchBar from './SearchBar';
import { useAuth0 } from "@auth0/auth0-react";
// import ""

const NavBar = () => {
  const { loginWithRedirect ,logout , user, isAuthenticated, isLoading} = useAuth0();
  return (
    <>
 


<header class="text-gray-600 mt-0  body-font">
  <div class="container mx-auto flex flex-wrap p-5 pt-0 flex-col md:flex-row items-center">
    <Link to={'/'} class="flex title-font font-medium items-center text-gray-900  md:mb-0 text-3xl">YouTube </Link>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link to={'/'} class="mr-5 hover:text-gray-900">Home</Link>
      <Link to={'/codewithharry'}class="mr-5 hover:text-gray-900">Code With Harry</Link>
      <Link to={'/Javascript Mastery'} class="mr-5 hover:text-gray-900">Javascript Mastery</Link>
      <Link to={'/warikoo'} class="mr-5 hover:text-gray-900">Ankur warikoo</Link>
      <Link to={'/ApnaCollege'} class="mr-5 hover:text-gray-900">Apna College </Link>
      <Link to={'/Ali Abdaal'} class="mr-5 hover:text-gray-900">Ali Abdaal </Link>

    </nav>
    {/* <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> */}
    <SearchBar/>

 {   isAuthenticated ?(
  <>


 <button className='m-1 bg-red-600  text-white p-1' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >Logout</button>
 <CgProfile  className='text-indigo-500'/>

        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      
  </>
 ):(
   <button className='m-1 bg-green-500  text-white p-1' onClick={() => loginWithRedirect()}>Login</button>

   )}
   
    
    
  </div>
</header>
      
    </>
  )
}

export default NavBar
