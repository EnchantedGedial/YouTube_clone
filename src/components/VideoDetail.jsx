// import React from 'react'
// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import ReactPlayer from "react-player";
// import { fetchFromApi } from "../utils/fetchFromApi";
// const VideoDetail = () => {
//   return (
//     <>


//     </>
//   )
// }

// export default VideoDetail


import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import ReactPlayer from "react-player";
import {fetchFromApi} from "../utils/fetchFromApi";

const VideoDetail = (ideaX) => {
    console.log(ideaX)
    // const [videoDetail, setVideoDetail] = useState(null);
    // const [videos, setVideos] = useState(null);
    // // const {id} = useParams();

    // useEffect(() => {
    //     fetchFromApi(`search?part=snippet&relatedToVideoId='NvjKXwt7n48'&type=video`)
    //     .then((data) => setVideos(data.items))
    // }, []);


    return (
        <div className="container" style={{display: "flex",justifyContent:"center" ,width:"95%"}}>

    <ReactPlayer url={`https://www.youtube.com/watch?v='HOVIfB0Sh3k'`} className="react-player"
    controls style={{width:"95%"}} />
    </div>
    )
};

export default VideoDetail;
