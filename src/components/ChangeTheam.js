import React from 'react'
import  {useState} from 'react';
const ChangeTheam = () => {


  const [myStyle,setmyStyle] = useState({
   color : "black",
   backgroundColor :"white"
})
const [text,settext]=useState("Switch to Dark Mode");

 const ChangeTheam=()=>{
  if(myStyle.color==="black"){
    setmyStyle({
      color : 'white',
      backgroundColor :'blacK'
    })
    settext("Switch to Light Mode")
  }
  else{
    setmyStyle({
    color : "black",
     backgroundColor:"white"
    })}
    settext("Switch to Dark Mode")

  }

  return (
    <>
     <div style={myStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis corrupti ex minus natus possimus dolorem optio id doloribus dolor, eos qui accusantium laudantium culpa repudiandae. Dolore, vitae beatae. Minus nam consectetur quae ad blanditiis!</div>
    <div>

   <button onClick={ChangeTheam}>{text}</button>
    </div>
      
    </>
  )
}

export default ChangeTheam

