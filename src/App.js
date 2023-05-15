import React from 'react'
import VideoDetail from './components/VideoDetail';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
const App = () => {
   
    return (
     <>
    <Router>
               <NavBar/>
               <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/warikoo" element={<Home Channel="ankur wariko"/>}>

                <Route path="detail" element={<VideoDetail/>}/>
                </Route>
                <Route path ="/codewithharry" element={<Home Channel="code with harry"/>}/>
                <Route path ="/ApnaCollege" element={<Home Channel="Apna College"/>}/>
                

              
                
               </Routes>

    </Router>
        
    </>
    )
}

export default App
