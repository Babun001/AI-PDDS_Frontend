import React from 'react';
// import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

import './Pages.css'
import diabetes_img from "../Assets/Diabetes.jpg";
import kidney_img from "../Assets/kidney02.jpg";
import Liver_img from "../Assets/Liver.jpg";
import Parkinson_img from "../Assets/Parkinson.jpg";
import ratina_img from "../Assets/Ratina.jpg";
import skin_img from "../Assets/skin.jpeg";
import alzeimer from "../Assets/alzheimers.jpg";
import brain from "../Assets/braintumors.jpg";
import breast from "../Assets/breast_cancer.jpg";
import covid from "../Assets/covid.avif";
import Heart from "../Assets/heart.jpg";
import Lung from "../Assets/lungcancer.jpg";
import pheumonia from "../Assets/pneumonia.jpg";
import Tuberculosis from "../Assets/Tuberculosis.jpg";

// import videobg from "../Assets/Doctor01.mp4";

export default function Service() {
  // const navigate = useNavigate();

  const Disease = [
    {
      D_name: "Diabetes Mellitus",
      D_img: diabetes_img,
      nav: '/Diabetes',
      id: '01'

    },

    {
      D_name: "Kidney Disease",
      D_img: kidney_img,
      nav: '/Kidney',
      id: '02'
    },

    {
      D_name: "Liver",
      D_img: Liver_img,
      nav: '/Liver',
      id: '03'
    },

    {
      D_name: "Parkinson Diasease",
      D_img: Parkinson_img,
      nav: '/ParkinsonDisease',
      id: '04'
    },

    {
      D_name: "Ratina",
      D_img: ratina_img,
      nav: '/Ratina',
      id: '05'
    },

    {
      D_name: "Skin Cancer",
      D_img: skin_img,
      nav: '/SkinCancer',
      id: '06'
    },

    {
      D_name: "Alzheimer",
      D_img: alzeimer,
      nav: '/Alzheimer',
      id: '07'
    },

    {
      D_name: "Brain Tumor",
      D_img: brain,
      nav: '/BrainTumor',
      id: '08'
    },

    {
      D_name: "Breast Cancer",
      D_img: breast,
      nav: '/BreastCancer',
      id: '09'
    },

    {
      D_name: "Covid",
      D_img: covid,
      nav: '/Covid',
      id: '10'
    },

    {
      D_name: "Heart",
      D_img: Heart,
      nav: '/Heart',
      id: '11'
    },

    {
      D_name: "Lung Cancer",
      D_img: Lung,
      nav: '/LungCancer',
      id: '12'
    },

    {
      D_name: "Pneumonia ",
      D_img: pheumonia,
      nav: '/Pneumonia',
      id: '13'
    },
    {
      D_name: "Tuberculosis",
      D_img: Tuberculosis,
      nav: '/Tuberculosis',
      id: '14'
    },

  ]


  return (
    <>
      <div className="serviceBG">
        <div className="service-text">
          <h2>AI-PDDS</h2>
          <h1>AI based Platform for Disease Diagnosis Services</h1>
        </div>
        <div className="service">
          <div className="allbtns">


            {Disease.map((route) => (
              <NavLink className="DiaseaseLink" to={route.nav} key={route.id}>


                <div className="card" >
                  <img src={route.D_img} className="card-img-top" alt='Error' />
                  <div className="card-body">
                    <h5 className="text">{route.D_name}</h5>
                  </div>
                </div>


              </NavLink>
            ))}

          </div>
        </div>
      </div>
    </>
  );
}