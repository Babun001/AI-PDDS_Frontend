import React from 'react';
import './Disease.css';


import bg from "../../Assets/heart.jpg";
import { useNavigate } from "react-router-dom";



export default function Heart() {

  const navigator = useNavigate();




  return (
    <>
      <div className='heart-container'>
        <div className="backbtn">
          <button className='btn btn-danger m-3' style={{ cursor: "pointer", fontWeight: "bold" }} onClick={() => navigator(-1)}>{"x"}</button>
        </div>

        <img className='heart_bg' src={bg} alt="@" />
        <div className="heartBody">

          <h1>Patient Form for Heart Disease</h1>

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


            <div className="form-group mt-3">
              <label htmlFor="pregnancy">Pregnancy</label>
              <input
                type="text"
                name="Pregnancies"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }}
                id="pregnancy"
                placeholder="How many children do you have?"
              // onChange={handleChange}
              />
            </div>


            <div className="form-group mt-3">
              <label htmlFor="Glucose">Glucose</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }}
                id="Glucose"
                placeholder="Enter Glucose level"
                name="Glucose"
              // onChange={handleChange}
              />
            </div>


            <div className="form-group mt-3">
              <label htmlFor="BloodPressure">BloodPressure</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }}
                id="BloodPressure"
                placeholder="Enter Your Blood Pressure"
                name="BloodPressure"
              // onChange={handleChange}
              />
            </div>


            <div className="form-group mt-3">
              <label htmlFor="Insulin">Insulin</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }}
                id="Insulin"
                placeholder="Enter Your Insulin Rate"
                name="Insulin"
              // onChange={handleChange}
              />
            </div>


            <div className="form-group mt-3">
              <label htmlFor="BMI">BMI</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }}
                id="BMI"
                placeholder="Enter Your BMI Rate"
                name="BMI"
              // onChange={handleChange}
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="BMI">Diabetes Pedigree Function</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }}
                id="BMI"
                placeholder="Enter DPF"
                name="DiabetesPedigreeFunction"
              // onChange={handleChange}
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="Insulin">Insulin</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }}
                id="Insulin"
                placeholder="Enter Your Insulin Rate"
                name="Insulin"
              // onChange={handleChange}
              />
            </div>


            <div className="form-group mt-3">
              <label htmlFor="BMI">BMI</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }}
                id="BMI"
                placeholder="Enter Your BMI Rate"
                name="BMI"
              // onChange={handleChange}
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="BMI">Diabetes Pedigree Function</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }}
                id="BMI"
                placeholder="Enter DPF"
                name="DiabetesPedigreeFunction"
              // onChange={handleChange}
              />
            </div>


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
