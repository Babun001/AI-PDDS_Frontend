import React from 'react';
// import Sidebar from '../Components/Sidebar';
// import video01 from "../Assets/Doctor01.mp4"
// import video02 from "../Assets/Doctor02.mp4"
// import video03 from "../Assets/Doctor03.mp4"
// import './Pages.css';
import { HiUserGroup } from "react-icons/hi";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { ImHappy } from "react-icons/im";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";

export default function Home() {


  return (
    <>
      <div className="home-container">
        <div className="bg-text">
          <h2>AI-PDDS</h2>
          <h1 style={{ fontSize: "70px", marginBottom: "2%", color: "black", fontWeight: "bold" }}>We are here only for you!</h1>
          <p>Welcome to AI PDDS, the cutting-edge platform revolutionizing disease diagnosis with the power of artificial intelligence. Our platform leverages advanced machine-learning algorithms and vast medical datasets to provide precise, swift and reliable disease diagnoses.</p>
        </div>


        <div className="dashbord">
          <div className="card" style={{ width: '10rem' }}>
            <div className="icons">{<HiUserGroup />}</div>
            <span className='CountNumbers'>0000</span>
            <span className='CountText'>Users</span>
          </div>


          <div className="card" style={{ width: '10rem' }}>
            <div className="icons">{<FaHandHoldingMedical />}</div>
            <span className='CountNumbers'>0000</span>
            <span className='CountText'>No. of Disease</span>
          </div>


          <div className="card" style={{ width: '10rem' }}>
            <div className="icons">{<ImHappy />}</div>
            <span className='CountNumbers'>0000</span>
            <span className='CountText'>5-star Rating</span>
          </div>


          <div className="card" style={{ width: '10rem' }}>
            <div className="icons-dash">{<BsGraphUpArrow />}</div>
            <span className='CountNumbers'>93%</span>
            <span className='CountText'>Accuracy</span>
          </div>


          <div className="card" style={{ width: '10rem' }}>
            <div className="icons">{<MdSecurity />}</div>
            <span className='CountNumbers'>100%</span>
            <span className='CountText'>Security</span>
          </div>
        </div>

      </div>
    </>
  );
}
