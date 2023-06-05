import React from 'react'
import {useState, useEffect} from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';

import VideoDetail from './components/VideoDetail';
import {fetchFromApi} from "./utils/fetchFromApi";
import Feeds from './components/Feeds';
import Videos from './components/Videos';

const Home = (props) => {
    const [selectedCategory, setselectedCategory] = useState("CodeWithHarry");
    const [videos, setvideos] = useState();
  
  

    
    useEffect(() => { setselectedCategory(props.Channel)}, [])
    
    
    
    useEffect(() => {
     
  
      fetchFromApi(`search?part=snippet&q=${props.Channel}`)
        .then((data) => setvideos(data.items))
       
      }, [props.channel]);
  


  



  return (
    <>
       <Videos videos={videos}/>
   
   
    {/* <Videos videos={videos}/> */}
    {/* if({videos.snippet.channelId} ==="UCRzYN32xtBf3Yxsx5BvJWJw"){

      console.log(videos)
    } */}
{/* 

     <Feeds />    
          <Feeds/>
          <Feeds/>
          <Feeds/>
          

          
          {/* <ReactPlayer url={`https://www.youtube.com/watch?v=${item?.id?.videoId}`} controls/> */}




    </>
      
    
  )
}

export default Home
