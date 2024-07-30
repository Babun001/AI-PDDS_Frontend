
import React from 'react';
import heartBg from "../../Assets/kidneybg.webp";
import './Disease.css';
import { useNavigate } from "react-router-dom";

export default function Kidney() {

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
          <h2 className="mx-auto" style={{ display: 'flex', justifyContent: 'center' }}>Patient Form for Kidney</h2>
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
              <label htmlFor="BloodPressure" className="label">Blood Pressure</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="BloodPressure"
                placeholder="Enter Blood Pressure"
                name="BloodPressure"
              // onChange={handleChange}
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="SpecificGravity " className="label">Specific Gravity</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="SpecificGravity"
                placeholder="Enter Specific Gravity"
                name="SpecificGravity"
              // onChange={handleChange}
              />
            </div>
            

            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="Albumin " className="label">Albumin</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="SpecificGravity"
                placeholder="Enter Albumin"
                name="Albumin"
              // onChange={handleChange}
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="Sugar  " className="label">Sugar</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="Sugar"
                placeholder="Enter Sugar"
                name="Sugar"
              // onChange={handleChange}
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="RedBloodCell" className="label">Red Blood Cell</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="RedBloodCell"
                placeholder="Enter Red Blood Cell"
                name="RedBloodCell"
              // onChange={handleChange}
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="PusCells " className="label">Pus Cells</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="PusCells"
                placeholder="Enter Pus Cells"
                name="PusCells"
              // onChange={handleChange}
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="PusCellsClumps " className="label">Pus Cells Clumps</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="PusCellsClumps"
                placeholder="Enter Pus Cells Clumps"
                name="PusCellsClumps"
              // onChange={handleChange}
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="Bacteria" className="label">Bacteria</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="Bacteria"
                placeholder="Bacteria"
                name="Bacteria"
              // onChange={handleChange}
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="BloodGlucoseRandom" className="label">Blood Glucose Random</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="BloodGlucoseRandom"
                placeholder="Enter Blood Glucose Random"
                name="BloodGlucoseRandom"
              // onChange={handleChange}
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="BloodUrea" className="label">Blood Urea</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="BloodUrea"
                placeholder="Enter Blood Urea"
                name="BloodUrea"
              // onChange={handleChange}
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="SerumCreatinine " className="label">Serum Creatinine</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="SerumCreatinine"
                placeholder="Enter Serum Creatinine"
                name="SerumCreatinine"
              // onChange={handleChange}
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="Sodium " className="label">Sodium</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="Sodium"
                placeholder="Enter Sodium"
                name="Sodium"
              // onChange={handleChange}
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="Potassium " className="label">Potassium</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="Potassium"
                placeholder="Enter Potassium"
                name="Potassium"
              // onChange={handleChange}
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="Haemoglobin" className="label">Haemoglobin</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="Haemoglobin"
                placeholder="Enter Haemoglobin"
                name="Haemoglobin"
              // onChange={handleChange}
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="PackedCellVolume" className="label">Packed Cell Volume</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="PackedCellVolume"
                placeholder="Enter Packed Cell Volume"
                name="PackedCellVolume"
              // onChange={handleChange}
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="WhiteBloodCellCount " className="label">White Blood Cell Count</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="WhiteBloodCellCount"
                placeholder="Enter White Blood Cell Count"
                name="WhiteBloodCellCount"
              // onChange={handleChange}
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="RedBloodCellCount " className="label">Red Blood Cell Count</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="RedBloodCellCount"
                placeholder="Enter Red Blood Cell Count"
                name="RedBloodCellCount"
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
