import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoDetail from './VideoDetail';
import ReactPlayer from "react-player";
import {Link} from "react-router-dom";
const Videos = ({videos}) => {
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
{console.log(item)}
      
        {/* <VideoDetail ideaX={item?.id?.videoId}/> */}
     

        {/* <ReactPlayer url={`https://www.youtube.com/watch?v=${item?.id?.videoId}`} controls/> */}

{  console.log(item.id.playlistId)}
          <Link to={`Video/${item?.id?.videoId}`} className="btn btn-primary">
View
            
          
          </Link>
       </div>
    


))}
</div>

    

      
    </>
  )
}

export default Videos
