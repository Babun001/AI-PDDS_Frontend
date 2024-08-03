import React from 'react';
import './Disease.css';


import heartBg from "../../Assets/heartbg.jpg";
import { useNavigate } from "react-router-dom";



export default function Heart() {

  const Heart_params = [
    { param_id: '01', type: "number", param_name: 'Age', param_lable: 'Age' },
    { param_id: '01', type: "number", param_name: 'ChestPainType', param_lable: 'ChestPainType' },
    { param_id: '01', type: "number", param_name: 'RestingBP', param_lable: 'RestingBP' },
    { param_id: '01', type: "number", param_name: 'Cholesterol', param_lable: 'Cholesterol' },
    { param_id: '01', type: "number", param_name: 'FastingBS', param_lable: 'FastingBS' },
    { param_id: '01', type: "number", param_name: 'RestingECG', param_lable: 'RestingECG' },
    { param_id: '01', type: "number", param_name: 'MaxHR', param_lable: 'MaxHR' },
    { param_id: '01', type: "number", param_name: 'ExerciseAngina', param_lable: 'ExerciseAngina' },
    { param_id: '01', type: "number", param_name: 'Oldpeak', param_lable: 'Oldpeak' },
    { param_id: '01', type: "number", param_name: 'ST_Slope', param_lable: 'ST Slope' }
  ]


  const Initial_heart_data = {
    Age: '',
    Sex: '',
    ChestPainType: '',
    RestingBP: '',
    Cholesterol: '',
    FastingBS: '',
    RestingECG: '',
    MaxHR: '',
    ExerciseAngina: '',
    Oldpeak: '',
    ST_Slope: ''
  }

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


            <div className="form-group mt-3">
              <label htmlFor="Sex">Sex</label>
              <select
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }}
                id="Sex">
                <option defaultValue>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>


            {
              Heart_params.map((para) => (
                <div className="form-group mt-2 font-weight-bold" >
                  <label htmlFor={para.param_name} className="label">{para.param_lable}</label>
                  <input
                    type={para.type}
                    className="form-control"
                    style={{ border: 'none', outline: 'none', fontSize: '1rem' }} 
                    id={para.param_name}
                    name={para.param_name}
                    placeholder={"Enter "+ para.param_lable}
                  />
                </div>
              ))
            }


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
