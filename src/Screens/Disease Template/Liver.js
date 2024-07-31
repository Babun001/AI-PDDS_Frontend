

import React from 'react';
import heartBg from "../../Assets/liverbg.jpg";
import './Disease.css';
import { useNavigate } from "react-router-dom";

export default function Liver() {

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
          <h2 className="mx-auto" style={{ display: 'flex', justifyContent: 'center' }}>Patient Form for Liver</h2>
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
              <label htmlFor="TotalBilirubin" className="label">Total Bilirubin</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="TotalBilirubin"
                placeholder="Enter Total Bilirubin"
                name="TotalBilirubin"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="DirectBilirubin" className="label">Direct Bilirubin</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="DirectBilirubin"
                placeholder="Enter Direct Bilirubin"
                name="DirectBilirubin"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="AlkalinePhosphatase" className="label">Alkaline Phosphatase</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="AlkalinePhosphatase"
                placeholder="Enter Alkaline Phosphatase"
                name="AlkalinePhosphatase"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="AlanineAminotransferase" className="label">Alanine Aminotransferase</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="AlanineAminotransferase"
                placeholder="Enter Alanine Aminotransferase"
                name="AlanineAminotransferase"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="AspartateAminotransferase" className="label">Aspartate Aminotransferase</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="AspartateAminotransferase"
                placeholder="Enter Aspartate Aminotransferase"
                name="AspartateAminotransferase"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="TotalProtein" className="label">Total Protein</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="TotalProtein"
                placeholder="Enter Total Protein"
                name="TotalProtein"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="Albumin" className="label">Albumin</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="Albumin"
                placeholder="Enter Total Albumin"
                name="Albumin"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="AlbuminAndGlobulinRatio" className="label">Albumin And Globulin Ratio</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="AlbuminAndGlobulinRatio"
                placeholder="Enter Albumin And Globulin Ratio"
                name="AlbuminAndGlobulinRatio"
              />
            </div>

            {/* ------------------------------------------------------------------------------------------------------------------------------------- */}
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
