import React from 'react';
// import Sidebar from '../Components/Sidebar';
import video01 from "../Assets/Doctor01.mp4"
// import video02 from "../Assets/Doctor02.mp4"
// import video03 from "../Assets/Doctor03.mp4"


export default function Home() {
  return (
    <>
      <div className="home-container" style={{ display: "flex" }}>

        <div className="bg-video">
          <video className='video-clip' src={video01} autoPlay muted loop />
        </div>


        <div className="bg-text">
          <h2>AI-PDDS</h2>
          <h1 style={{ fontSize: "70px", marginBottom: "2%", color: "black", fontWeight: "bold" }}>We are here only for you!</h1>
          <p>Welcome to AI PDDS, the cutting-edge platform revolutionizing disease diagnosis with the power of artificial intelligence. Our platform leverages advanced machine-learning algorithms and vast medical datasets to provide precise, swift and reliable disease diagnoses.</p>
        </div>
      </div>
    </>
  );
}
