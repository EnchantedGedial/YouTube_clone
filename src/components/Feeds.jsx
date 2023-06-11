import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useState, useEffect } from 'react';
// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoDetail from './VideoDetail';
import { fetchFromApi } from '../utils/fetchFromApi';
import ReactPlayer from "react-player";
import {Link} from "react-router-dom";
const Feeds = ({name}) => {

  const [videos, setvideos] = useState();


  useEffect(() => {

    fetchFromApi(`search?part=snippet&q=${name}`)
      .then((data) => setvideos(data.items))

  }, [name]);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  return (
    <>
   
<div className="flex w-11/12 pl-8">

   <div className='text-2xl font-bold '>{capitalizeFirstLetter(name)}</div>
</div>
   <div className="container flex items-center m-2  m-auto flex-wrap justify-center">
    {videos?.slice(5,9).map((item)=>(
       
       <Link to={`/Video/${item?.id?.videoId}`} >  
    <div style={{width:300 ,height:300}} class="overflow-hidden   md:w-1/3 bg-white m-4 shadow-sm flex flex-col justify-center">
        <div class="h-26 w-full overflow-hidden"> <img src={item?.snippet?.thumbnails?.high?.url} className="card-img-top" alt="..."/></div>
        <div class="text-sm text-gray-500 m-2">{item.snippet.publishedAt.slice(0,10)}</div>
        <div class="font-bold text-lg text-black m-2">{item.snippet.title.slice(0,30)}..</div>
        <div className="flex">

        <div class=" text-gray-500 m-2">{item?.snippet?.channelTitle}</div>
        {/* <span className='pt-2.5'><MdVerified/></span> */}
        </div>
       
        
        
    </div>
    
    </Link>
 
    




))}
   </div>


    

      
    </>
  )
}

export default Feeds
