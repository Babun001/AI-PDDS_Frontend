

import React from 'react';
import heartBg from "../../Assets/lungbg.jpg";
import './Disease.css';
import { useNavigate } from "react-router-dom";

export default function LungCancer() {

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
          <h2 className="mx-auto" style={{ display: 'flex', justifyContent: 'center' }}>Patient Form for Lung Cancer</h2>
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
              <label htmlFor="AirPollution" className="label">Air Pollution</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="AirPollution"
                placeholder="Enter Air Pollution"
                name="AirPollution"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="AlcoholUse" className="label">Alcohol Use</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="AlcoholUse"
                placeholder="Enter Alcohol Use"
                name="AlcoholUse"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="DustAllergy" className="label">Dust Allergy</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="DustAllergy"
                placeholder="Dust Allergy"
                name="DustAllergy"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="OccupationalHazards" className="label">Occupational Hazards</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="OccupationalHazards"
                placeholder="Occupational Hazards"
                name="OccupationalHazards"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="GeneticRisk" className="label">Genetic Risk</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="GeneticRisk"
                placeholder="Genetic Risk"
                name="GeneticRisk"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="ChronicLungDisease" className="label">Chronic Lung Disease</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="ChronicLungDisease"
                placeholder="Chronic Lung Disease"
                name="ChronicLungDisease"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="BalancedDiet" className="label">Balanced Diet</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="BalancedDiet"
                placeholder="Balanced Diet"
                name="BalancedDiet"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="Obesity" className="label">Obesity</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="Obesity"
                placeholder="Enter Obesity"
                name="Obesity"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="Smoking" className="label">Smoking</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="Smoking"
                placeholder="Smoking"
                name="Smoking"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="PassiveSmoker" className="label">Passive Smoker</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="PassiveSmoker"
                placeholder="Passive Smoker?"
                name="PassiveSmoker"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="ChestPain" className="label">Chest Pain</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="ChestPain"
                placeholder="Chest Pain?"
                name="ChestPain"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="CoughingOfBlood" className="label">Coughing Of Blood</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="CoughingOfBlood"
                placeholder="Coughing Of Blood?"
                name="CoughingOfBlood"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="Fatigue" className="label">Fatigue</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="Fatigue"
                placeholder="Fatigue?"
                name="Fatigue"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="WeightLoss" className="label">Weight Loss</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="WeightLoss"
                placeholder="Weight Loss"
                name="WeightLoss"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="ShortnessOfBreath " className="label">Shortness Of Breath</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="ShortnessOfBreath"
                placeholder="Shortness Of Breath"
                name="ShortnessOfBreath"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="Wheezing" className="label">Wheezing</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="Wheezing"
                placeholder="Wheezing?"
                name="Wheezing"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="SwallowingDifficulty" className="label">Swallowing Difficulty</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="SwallowingDifficulty"
                placeholder="Swallowing Difficulty?"
                name="SwallowingDifficulty"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="ClubbingOfFingerNails" className="label">Clubbing Of Finger Nails</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="ClubbingOfFingerNails"
                placeholder="Clubbing Of Finger Nails?"
                name="ClubbingOfFingerNails"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="FrequentCold " className="label">Frequent Cold</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="FrequentCold"
                placeholder="Frequent Cold?"
                name="FrequentCold"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="DryCough  " className="label">Dry Cough</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="DryCough"
                placeholder="Dry Cough?"
                name="DryCough"
              />
            </div>


            <div className="form-group mt-2 font-weight-bold" >
              <label htmlFor="Snoring  " className="label">Snoring</label>
              <input
                type="text"
                className="form-control"
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="Snoring"
                placeholder="Snoring?"
                name="Snoring"
              />
            </div>


{/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
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
