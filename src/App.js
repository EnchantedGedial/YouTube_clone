import React from 'react'
import VideoDetail from './components/VideoDetail';
import Home from './Home';
import Feeds from './components/Feeds'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import SearchFeed from './components/SearchFeed';
import Videos from './components/Videos';
const App = () => {
   
    return (
     <>
    <Router>
               <NavBar/>
               <Routes>
         
                        <Route path='/' element={<Home Channel="CodeWithHarry"/>}/>
                        <Route path="/warikoo" element={<Home Channel="warikoo"/>}/>
                        <Route path ="/codewithharry" element={<Home Channel="CodeWithHarry"/>}/>
                        <Route path ="/ApnaCollege" element={<Home Channel="Apna College"/>}/>
                        <Route path ="/Javascript Mastery" element={<Home Channel="Javascript Mastery"/>}/>
                        <Route path ="/Ali Abdaal" element={<Home Channel="Ali Abdaal"/>}/>
                        <Route path="Video/:id" element={<VideoDetail />} /> 
                        <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
               
               </Routes>

    </Router>
        
    </>
    )
}

export default App
