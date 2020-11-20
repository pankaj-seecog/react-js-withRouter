import React,{useState} from "react";
import {Redirect} from "react-router-dom";
const About = () => {
  const [stt,setStatus]=useState(false);
  return (
    <>
      <h1>Inside About us page</h1>
      {
        (stt==true)?()=>{
          console.log("-----")
         return <Redirect to="/about" />}:null

      }
      <hr/>
      <button onClick={()=>{
        setStatus(true);
      }}>Submit</button>
    </>
  );
};
export default About;
