

import { React, useState } from 'react';
import heartBg from "../../Assets/liverbg.jpg";
import './Disease.css';
import { useNavigate } from "react-router-dom";

export default function Liver() {

  const Liver_params = [
    {
      param_id: '1',
      type: "number",
      param_name: 'Age',
      param_lable: 'Age',
      placeholder: 'Enter your age'
    },
    // {
    //   param_id: '2',
    //   type: "text",
    //   param_name: 'Gender',
    //   param_lable: 'Gender',
    //   placeholder: 'Enter Gender'
    // },
    {
      param_id: '8',
      type: "number",
      param_name: 'Total_Bilirubin',
      param_lable: 'Total Bilirubin',
      placeholder: 'Enter Total Bilirubin'
    },
    {
      param_id: '3',
      type: "number",
      param_name: 'Alamine_Aminotransferase',
      param_lable: 'Alamine Aminotransferase',
      placeholder: 'Enter Alamine Aminotransferase'
    },
    {
      param_id: '4',
      type: "number",
      param_name: 'Aspartate_Aminotransferase',
      param_lable: 'Aspartate Aminotransferase',
      placeholder: 'Enter Aspartate Aminotransferase'
    },
    {
      param_id: '5',
      type: "number",
      param_name: 'Total_Protines',
      param_lable: 'Total Protines',
      placeholder: 'Enter Total Protines'
    },
    {
      param_id: '6',
      type: "number",
      param_name: 'Albumin',
      param_lable: 'Albumin',
      placeholder: 'Enter Albumin'
    },
    {
      param_id: '7',
      type: "number",
      param_name: 'Albumin_and_Globulin_Ratio',
      param_lable: 'Albumin and Globulin Ratio',
      placeholder: 'Enter Albumin and Globulin Ratio'
    }
  ]

  const liver_initial_value = {
    Age:"",
    Gender:"",
    Total_Bilirubin:"",
    Alamine_Aminotransferase:"",
    Aspartate_Aminotransferase:"",
    Total_Protines:"",
    Albumin:"",
    Albumin_and_Globulin_Ratio:""
  }

  const [liverData, setLiverData] = useState(liver_initial_value);

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setLiverData({...liverData, [name]:value});

  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(liverData);
  }

  const handleClear = () =>{
    setLiverData(liver_initial_value);
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
          <h2 className="mx-auto" style={{ display: 'flex', justifyContent: 'center' }}>Patient Form for Liver</h2>
          <form >

            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="firstName" className="label">Name</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="firstName"
                placeholder="Enter Your Name"
                name='firstName'
              />
            </div>


            <div className="form-group mt-3">
              <label htmlFor="Gender">Gender</label>
              <select
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }}
                id="Gender"
                name='Gender'
                onChange={handleChange}
                >
                <option defaultValue>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>


            {
              Liver_params.map((para) => (
                <div className="form-group mt-2 font-weight-bold" key={para.param_id}>
                  <label htmlFor={para.param_name} className="label">{para.param_lable}</label>
                  <input
                    type={para.type}
                    className="form-control"
                    style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id={para.param_name}
                    placeholder={para.placeholder}
                    // value={parkinsonData[par.Name]}
                    name={para.param_name}
                  // id={par.Name}
                  onChange={handleChange}
                  />
                </div>
              ))
            }

            {/* ------------------------------------------------------------------------------------------------------------------------------------- */}
            <div className="buttons">
              <button
                type="button"
                className="btn btn-success"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }}
                onClick={handleSubmit}
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
