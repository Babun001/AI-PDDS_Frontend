
import React, { useEffect, useState } from 'react';
import heartBg from "../../Assets/kidneybg.webp";
import './Disease.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Kidney() {

  const initialData = {
    age: "",
    blood_pressure: "",
    specific_gravity: "",
    albumin: "",
    sugar: "",
    blood_glucose_random: "",
    blood_urea: "",
    serum_creatinine: "",
    sodium: "",
    potassium: "",
    haemoglobin: "",
    packed_cell_volume: "",
    white_blood_cell_count: "",
    red_blood_cell_count: ""
  }

  const [data, setData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchApi();
    console.log(`fetchApi working...`);
    
  }
  
  const fetchApi = async() =>{
    try {
        const response = await axios.post("",{data},{
          method: {"Content-Type": "application/json"}
        });

        if(!response){
          console.error("Server unable to detect kidney disease detection response!");
          throw {"Error":"Error to fetch data"};
        }

    } catch (error) {
      console.error("Unable to fetch data from backend at kidney disease detection! : ",error);
      throw error;
    }
  }

  // useEffect(()=>{
  //   console.log(data);
    
  // },[data])


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
              <label htmlFor="DOB" className="label">Age</label>
              <input
                type="number"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }}
                placeholder="Enter Your Age"
                name="Age"
                onChange={handleChange}
                // value={data.age}

              />
            </div>

            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="BloodPressure" className="label">Blood Pressure</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="BloodPressure"
                placeholder="Enter Blood Pressure"
                name="BloodPressure"
                onChange={handleChange}
                // value={data.blood_pressure}
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
                onChange={handleChange}
                // value={data.specific_gravity}
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
                onChange={handleChange}
                // value={data.albumin}
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
                onChange={handleChange}
                // value={data.sugar}
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
                onChange={handleChange}
                // value={data.blood_glucose_random}
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
                onChange={handleChange}
                // value={data.blood_urea}
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
                onChange={handleChange}
                // value={data.serum_creatinine}
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
                onChange={handleChange}
                // value={data.sodium}
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
                onChange={handleChange}
                // value={data.potassium}
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
                onChange={handleChange}
                // value={data.haemoglobin}
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
                onChange={handleChange}
                // value={data.packed_cell_volume}
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
                onChange={handleChange}
                // value={data.white_blood_cell_count}
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
                onChange={handleChange}
                // value={data.red_blood_cell_count}
              />
            </div>


            <div className="buttons">
              <button
                type="submit"
                className="btn btn-success"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }}
                onClick={handleSubmit}
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
