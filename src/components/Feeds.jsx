import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useState, useEffect } from 'react';
// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoDetail from './VideoDetail';
import { fetchFromApi } from '../utils/fetchFromApi';
import ReactPlayer from "react-player";
import {Link} from "react-router-dom";
const Feeds = ({Channel}) => {

  const [videos, setvideos] = useState();


  useEffect(() => {

    fetchFromApi(`search?part=snippet&q=${Channel.Channel}`)
      .then((data) => setvideos(data.items))

  }, [Channel.Channel]);

  return (
    <>
   

   
   <div  style={{display: "flex",justifyContent:"center" ,margin:"auto",flexWrap:"wrap",gap:"28px"}}>
    {videos?.map((item)=>(
        <div className="card" style={{ width: "20rem"}}>
        <img src={item?.snippet?.thumbnails?.high?.url} className="card-img-top" alt="..."/>
        <div className="card-body">
          <Link to="detail">
          <h5 className="card-title">{item?.snippet?.title}</h5>
          </Link>
          <p className="card-text">{item?.snippet?.description}</p>
          <p style={{fontSize:"25px", fontStyle:"bold"}}>{item?.snippet?.channelTitle}</p>
        </div>

          <Link to={`Video/${item?.id?.videoId}`} className="btn btn-primary">View </Link>
       </div>
    


))}
</div>


    

      
    </>
  )
}

export default Feeds
