import React, { useState } from 'react';
import heartBg from "../../Assets/imp01.jpg";
import './Disease.css';
import { useNavigate } from "react-router-dom";

export default function BreastCancer() {

  const Breast_params = [
    { param_id: '01', type: "number", param_name: 'radius_mean', param_lable: 'Radius Mean' },
    { param_id: '02', type: "number", param_name: 'texture_mean', param_lable: 'Texture Mean' },
    { param_id: '03', type: "number", param_name: 'perimeter_mean', param_lable: 'Perimeter Mean' },
    { param_id: '04', type: "number", param_name: 'area_mean', param_lable: 'Area Mean' },
    { param_id: '05', type: "number", param_name: 'smoothness_mean', param_lable: 'Smoothness Mean' },
    { param_id: '06', type: "number", param_name: 'compactness_mean', param_lable: 'Compactness Mean' },
    { param_id: '07', type: "number", param_name: 'concavity_mean', param_lable: 'Concavity Mean' },
    { param_id: '08', type: "number", param_name: 'concave points_mean', param_lable: 'Concave Points Mean' },
    { param_id: '09', type: "number", param_name: 'symmetry_mean', param_lable: 'Symmetry Mean' },
    { param_id: '10', type: "number", param_name: 'fractal_dimension_mean', param_lable: 'Fractal Dimension Mean' },
    { param_id: '11', type: "number", param_name: 'radius_se', param_lable: 'Radius SE' },
    { param_id: '12', type: "number", param_name: 'texture_se', param_lable: 'Texture SE' },
    { param_id: '13', type: "number", param_name: 'perimeter_se', param_lable: 'Perimeter SE' },
    { param_id: '14', type: "number", param_name: 'area_se', param_lable: 'Area SE' },
    { param_id: '15', type: "number", param_name: 'smoothness_se', param_lable: 'Smoothness SE' },
    { param_id: '16', type: "number", param_name: 'compactness_se', param_lable: 'Compactness SE' },
    { param_id: '17', type: "number", param_name: 'concavity_se', param_lable: 'Concavity SE' },
    { param_id: '18', type: "number", param_name: 'concave points_se', param_lable: 'Concave Points SE' },
    { param_id: '19', type: "number", param_name: 'symmetry_se', param_lable: 'Symmetry SE' },
    { param_id: '20', type: "number", param_name: 'fractal_dimension_se', param_lable: 'Fractal Dimension SE' },
    { param_id: '21', type: "number", param_name: 'radius_worst', param_lable: 'Radius Worst' },
    { param_id: '22', type: "number", param_name: 'texture_worst', param_lable: 'Texture Worst' },
    { param_id: '23', type: "number", param_name: 'perimeter_worst', param_lable: 'Perimeter Worst' },
    { param_id: '24', type: "number", param_name: 'area_worst', param_lable: 'Area Worst' },
    { param_id: '25', type: "number", param_name: 'smoothness_worst', param_lable: 'Smoothness Worst' },
    { param_id: '26', type: "number", param_name: 'compactness_worst', param_lable: 'Compactness Worst' },
    { param_id: '27', type: "number", param_name: 'concavity_worst', param_lable: 'Concavity Worst' },
    { param_id: '28', type: "number", param_name: 'concave points_worst', param_lable: 'Concave Points Worst' },
    { param_id: '29', type: "number", param_name: 'symmetry_worst', param_lable: 'Symmetry Worst' },
    { param_id: '30', type: "number", param_name: 'fractal_dimension_worst', param_lable: 'Fractal Dimension Worst' }

  ]



  const Initial_breast_data = {
    'radius_mean': "",
    'texture_mean': "",
    'perimeter_mean': "",
    'area_mean': "",
    'smoothness_mean': "",
    'compactness_mean': "",
    'concavity_mean': "",
    'concave points_mean': "",
    'symmetry_mean': "",
    'fractal_dimension_mean': "",
    'radius_se': "",
    'texture_se': "",
    'perimeter_se': "",
    'area_se': "",
    'smoothness_se': "",
    'compactness_se': "",
    'concavity_se': "",
    'concave points_se': "",
    'symmetry_se': "",
    'fractal_dimension_se': "",
    'radius_worst': "",
    'texture_worst': "",
    'perimeter_worst': "",
    'area_worst': "",
    'smoothness_worst': "",
    'compactness_worst': "",
    'concavity_worst': "",
    'concave points_worst': "",
    'symmetry_worst': "",
    'fractal_dimension_worst': ""
  }



  const [ breastData, setBreastData ] = useState(Initial_breast_data);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setBreastData({...breastData, [name]:value});

  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(breastData);    
  }



  const handleDelete = () => {
    setBreastData(Initial_breast_data);
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
          <h2 className="mx-auto" style={{ display: 'flex', justifyContent: 'center' }}>Patient Form for Breast Cancer</h2>
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
              />
            </div>


            {
              Breast_params.map((para) => (
                <div className="form-group mt-2 font-weight-bold" key={para.param_id}>
                  <label htmlFor={para.param_name} className="label">{para.param_lable}</label>
                  <input
                    type={para.type}
                    className="form-control"
                    style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id={para.param_name}
                    placeholder={"Enter " + para.param_lable}
                    name={para.param_name}
                    onChange={handleChange}
                  />
                </div>
              ))
            }

            {/* ------------------------------------Button section ----------------------------------------- */}

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
                onClick={handleDelete}
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }}>Clear Form</button>
            </div>

          </form>
        </div>
      </div>

    </>
  );
}
