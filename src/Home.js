import React from 'react'
import {useState, useEffect} from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Video from './components/Video';
import VideoDetail from './components/VideoDetail';
import {fetchFromApi} from "./utils/fetchFromApi";

const Home = (props) => {
    const [selectedCategory, setselectedCategory] = useState("dhruv rathee")
    const [videos, setvideos] = useState()

    const [search, setsearch] = useState()

    
    useEffect(() => {
        setselectedCategory(props.Channel)
      
    }, [])
    
    useEffect(() => {

        fetchFromApi(`search?part=snippet&q=${props.Channel}&order=date`).then((data) => {
            setvideos(data.items)


        })

    }, [props.Channel])
    const searchIgnetion=(elem)=>{
      setsearch(elem.target.value)
    }
  return (
    <>

<input type="text" value={search} onChange={searchIgnetion} />
        {search}

        {console.log(videos)}
        <Video videos={videos}/> {/* <ReactPlayer url={`https://www.youtube.com/watch?v=${item?.id?.videoId}`} controls/> */}




    </>
      
    
  )
}

export default Home
