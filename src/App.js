import React from 'react'
import VideoDetail from './components/VideoDetail';
import Home from './Home';
import Feeds from './components/Feeds'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
const App = () => {
   
    return (
     <>
    <Router>
               <NavBar/>
               <Routes>
         
                        <Route path='/' element={<Home Channel="CodeWithHarry"/>}/>
                        <Route path="/warikoo" element={<Home Channel="warikoo"/>}/>
                        {/* <Route path="detail" element={<VideoDetail/>}/></Route> */}
                        <Route path ="/codewithharry" element={<Home Channel="CodeWithHarry"/>}/>
                        <Route path ="/ApnaCollege" element={<Home Channel="Apna College"/>}/>
                        <Route path ="/Javascript Mastery" element={<Home Channel="Javascript Mastery"/>}/>
                        <Route path="Video/:id" element={<VideoDetail />} /> 
               
               </Routes>

    </Router>
        
    </>
    )
}

export default App
