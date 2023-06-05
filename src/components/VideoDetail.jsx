


import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import ReactPlayer from "react-player";
import {fetchFromApi} from "../utils/fetchFromApi";

const VideoDetail = ({ideaX}) => {

    let { id } = useParams();
   { console.log()}
    


    return (
        <div className="container" style={{display: "flex",justifyContent:"center" ,width:"95%"}}>

    <ReactPlayer url={`https://www.youtube.com/watch?v=${id}` } className="react-player"
    controls style={{width:"95%"}} />
    </div>
    )
};

export default VideoDetail;
