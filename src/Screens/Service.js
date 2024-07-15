import React from 'react';
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

// import Diabetes from "../Screens/Disease Template/Diabetes";
import './Pages.css'
// import ser_bg from '../Assets/neuron.jpeg';

export default function Service() {
  const navigate = useNavigate();

  const Disease = [
    {
      D_name: "Diabetes Mellitus",
      D_img: '',
      nav: '/Diabetes'
    },

    {
      D_name: "Kidney Disease",
      D_img: '',
      nav: '/Kidney'
    },

    {
      D_name: "Liver",
      D_img: '',
      nav: '/Liver'
    },

    {
      D_name: "Parkinson Diasease",
      D_img: '',
      nav: '/ParkinsonDisease'
    },

    {
      D_name: "Ratina",
      D_img: '',
      nav: '/Ratina'
    },

    {
      D_name: "Skin Cancer",
      D_img: '',
      nav: '/SkinCancer'
    }
  ]

  return (
    <>
      <div className="serviceBG">
        {/* <img src={ser_bg}/> */}
        <div className="service">
          <div className="allbtns">
           

            {Disease.map((route) => (
              <NavLink className="DiaseaseLink" to={route.nav} key={route.D_nam}>
                {/* <div className="icons">
                  {route.icon}
                </div> */}
                <button className='btn btn-success m-2' onClick={() => navigate(route.nav)}>{route.D_name}</button>
              </NavLink>
            ))}


          </div>
        </div>
      </div>
    </>
  );
}

// /Liver /Ratina  /SkinCancer  /ParkinsonDisease