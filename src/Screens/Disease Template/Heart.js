import React from 'react';
import './Disease.css';


import heartBg from "../../Assets/heartbg.jpg";
import { useNavigate } from "react-router-dom";



export default function Heart() {

  const navigator = useNavigate();




  return (
    <>
      <div className="diabetes-container" style={{ display: "flex" }}>

        <div className="backbtn">
          <button className='btn btn-danger m-3' style={{ cursor: "pointer", fontWeight: "bold" }} onClick={() => navigator(-1)}>{"x"}</button>
        </div>
        <img className="BackgroundImage" src={heartBg} alt="bg-img" />

        <div className="patientform bg-text mt-5  sticky-top text-dark fs-6">
          {/* <h1>This is form area!</h1> */}
          <h2 className="mx-auto" style={{ display: 'flex', justifyContent: 'center' }}>Patient Form for Diabetes Melitus</h2>
          <form >


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="firstName" className="label">Name</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="firstName"
                placeholder="Enter Your Name"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="DOB" className="label">Age</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="firstName"
                placeholder="Enter Your Age"
                name="Age"
                // onChange={handleChange}

              />
            </div>


            <div className="form-group mt-3">
              <label htmlFor="gender">Gender</label>
              <select
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }}
                id="gender">
                <option defaultValue>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="ChestPain" className="label">Chest Pain</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="ChestPain"
                placeholder="Do you have Chest Pain?"
                name='ChestPain'
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="RestingBloodPressure" className="label">Resting Blood Pressure</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="RestingBloodPressure"
                placeholder="Enter Resting Blood Pressure"
                name='RestingBloodPressure'
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="Cholesterol" className="label">Cholesterol</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="Cholesterol"
                placeholder="Enter Cholesterol"
                name='Cholesterol'
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="FastingBloodSugar" className="label">Fasting Blood Sugar</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="FastingBloodSugar"
                placeholder="Fasting Blood Sugar"
                name='FastingBloodSugar'
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="RestingECG " className="label">Resting ECG</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="RestingECG"
                placeholder="Enter Resting ECG"
                name='RestingECG'
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="MaximumHeartRate " className="label">Maximum Heart Rate</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="MaximumHeartRate"
                placeholder="Enter Maximum Heart Rate"
                name='MaximumHeartRate'
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="ExerciseAngina " className="label">Exercise Angina</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="ExerciseAngina"
                placeholder="Exercise Angina"
                name='ExerciseAngina'
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="OldPeak " className="label">Old Peak</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="OldPeak"
                placeholder="Enter Old Peak"
                name='OldPeak'
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="STSlope " className="label">ST Slope</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="STSlope"
                placeholder="Enter ST Slope"
                name='STSlope'
              />
            </div>

            {/* -------------------------------------------------------------------------------------------------------------------------------- */}
            <div className="buttons">
              <button
                type="button"
                className="btn btn-success"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }}
                >Check</button>
              {/* create a popup window to show the output */}
              <button
                type="reset"
                className="btn btn-danger"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }}>Clear Form</button>
            </div>

          </form>
        </div>
      </div>

    </>
  );
}
