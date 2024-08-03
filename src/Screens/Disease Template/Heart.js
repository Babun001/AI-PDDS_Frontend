import React, { useState } from 'react';
import './Disease.css';


import heartBg from "../../Assets/heartbg.jpg";
import { useNavigate } from "react-router-dom";



export default function Heart() {

  const Heart_params = [
    { param_id: '01', type: "number", param_name: 'Age', param_lable: 'Age' },
    { param_id: '02', type: "number", param_name: 'ChestPainType', param_lable: 'Chest Pain Type' },
    { param_id: '03', type: "number", param_name: 'RestingBP', param_lable: 'Resting BP' },
    { param_id: '04', type: "number", param_name: 'Cholesterol', param_lable: 'Cholesterol' },
    { param_id: '05', type: "number", param_name: 'FastingBS', param_lable: 'Fasting BS' },
    { param_id: '06', type: "number", param_name: 'RestingECG', param_lable: 'Resting ECG' },
    { param_id: '07', type: "number", param_name: 'MaxHR', param_lable: 'Max HR' },
    { param_id: '08', type: "number", param_name: 'ExerciseAngina', param_lable: 'Exercise Angina' },
    { param_id: '09', type: "number", param_name: 'Oldpeak', param_lable: 'Oldpeak' },
    { param_id: '10', type: "number", param_name: 'ST_Slope', param_lable: 'ST Slope' }
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


  const [ heartData, setHeartData ] = useState(Initial_heart_data);


  const handleChange = (e) => {    
    const { name, value } = e.target;
    setHeartData({...heartData, [name]:value});
  }


  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(heartData);
  }


  const handleClear = () => {
    setHeartData(Initial_heart_data);
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
          <h2 className="mx-auto" style={{ display: 'flex', justifyContent: 'center' }}>Patient Form for Heart Disease</h2>
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
                name='Sex'
                onChange={handleChange}
                id="Sex"
                value={heartData.Sex}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>


            {
              Heart_params.map((para) => (
                <div className="form-group mt-2 font-weight-bold" key={para.param_id}>
                  <label htmlFor={para.param_name} className="label">{para.param_lable}</label>
                  <input
                    type={para.type}
                    className="form-control"
                    style={{ border: 'none', outline: 'none', fontSize: '1rem' }} 
                    id={para.param_name}
                    name={para.param_name}
                    placeholder={"Enter "+ para.param_lable}
                    value={heartData[para.param_name]}
                    onChange={handleChange}
                  />
                </div>
              ))
            }


            {/* -------------------------------------------------------------------------------------------------------------------------------- */}
            <div className="buttons">
              <button
                type="button"
                className="btn btn-success"
                onClick={handleSubmit}
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }}
              >Check</button>
              {/* create a popup window to show the output */}
              <button
                type="reset"
                className="btn btn-danger"
                onClick={handleClear}
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }}>Clear Form</button>
            </div>

          </form>
        </div>
      </div>

    </>
  );
}
