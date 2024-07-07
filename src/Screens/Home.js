import React from 'react';
import video01 from "../Assets/Doctor01.mp4"

// import Navbar from '../Components/Navbar';

export default function Home() {
  return (
    <>
      <div className="bg-video">
        <video src={video01} autoPlay muted loop/>
      </div>

      <div className="bg-text">
        <h2>AIPDDS</h2>
        <h1 style={{fontSize:"50px"}}>We are here only for you!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illum, eaque hic delectus vel beatae tenetur quisquam praesentium ipsa eligendi ab veritatis odit molestias, blanditiis dignissimos consequatur id quis sed.</p>
      </div>
    </>
  );
}
