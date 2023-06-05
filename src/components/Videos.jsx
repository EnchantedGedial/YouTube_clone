import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { MdVerified } from 'react-icons/md';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoDetail from './VideoDetail';
import ReactPlayer from "react-player";
import {Link} from "react-router-dom";
const Videos = ({videos}) => {
  return (
    <>
   {console.log(videos)}

   <div className="container flex items-center m-2  m-auto flex-wrap justify-center">
    {videos?.map((item)=>(
       
       <Link to={`/Video/${item?.id?.videoId}`} >  
    <div style={{width:360 ,height:400}} class="overflow-hidden   md:w-1/3 bg-white m-4 shadow-sm flex flex-col justify-center">
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

export default Videos
