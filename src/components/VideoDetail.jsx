


import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import ReactPlayer from "react-player";
import {fetchFromApi} from "../utils/fetchFromApi";

const VideoDetail = ({ideaX}) => {
   { console.log(ideaX)}
    


    return (
        <div className="container" style={{display: "flex",justifyContent:"center" ,width:"95%"}}>

    <ReactPlayer url={`https://www.youtube.com/watch?v=${ideaX}` } className="react-player"
    controls style={{width:"95%"}} />
    </div>
    )
};

export default VideoDetail;
