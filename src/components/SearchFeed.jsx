import React from 'react'
import { fetchFromApi } from '../utils/fetchFromApi';
import Videos from './Videos';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
    const [videos, setVideos] = useState(null);
    const {searchTerm}=useParams();
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);
  return (
    <>
    {<Videos videos={videos}/>}

    
      
    </>
  )
}

export default SearchFeed
