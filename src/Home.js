import React from 'react'
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';

import VideoDetail from './components/VideoDetail';
import { fetchFromApi } from "./utils/fetchFromApi";
import Feeds from './components/Feeds';
import Videos from './components/Videos';
import Hero from './components/Hero';

const Home = (props) => {

  const [videos, setvideos] = useState();


  useEffect(() => {


    fetchFromApi(`search?part=snippet&q=${props.Channel}`)
      .then((data) => setvideos(data.items))

  }, [props.channel]);







  return (
    <>
    <Hero/>
      {/* <Videos videos={videos} /> */}
      <Feeds name={"codeWithHarry"}/>
      <Feeds name={"warikoo"}/>
      <Feeds name={"appnacollege"}/>
      <Feeds name={"Javascript Mastery"}/>
      <Feeds name={"Ali Abdaal"}/>
      




    </>


  )
}

export default Home
