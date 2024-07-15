import React from 'react';
import { useNavigate } from 'react-router-dom'
// import Diabetes from "../Screens/Disease Template/Diabetes";

export default function Service() {
  const navigate = useNavigate();

  return (
    <>
    <div className="allbtns">
      <button className='btn btn-success m-2' onClick={() =>navigate('/Diabetes')}>Diabetes</button>
      <button className='btn btn-success m-2' onClick={() =>navigate('/Kidney')}>Kidney</button>
      <button className='btn btn-success m-2' onClick={() =>navigate('/Liver')}>Liver</button>
      <button className='btn btn-success m-2' onClick={() =>navigate('/Ratina')}>Ratina</button>
      <button className='btn btn-success m-2' onClick={() =>navigate('/SkinCancer')}>Skin Cancer</button>
      <button className='btn btn-success m-2' onClick={() =>navigate('/ParkinsonDisease')}>Parkinson Disease</button>
    </div>
    </>
  );
}

// /Liver /Ratina  /SkinCancer  /ParkinsonDisease