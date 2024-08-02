

import { React, useState } from 'react';
import heartBg from "../../Assets/Parkinson.jpg";
import './Disease.css';
import { useNavigate } from "react-router-dom";

export default function ParkinsonDisease() {

  const initial_data = {
    mdvp_fo_hz: '',
    mdvp_fhi_hz: '',
    mdvp_flo_hz: '',
    mdvp_jitter_in_percent: '',
    mdvp_jitter_abs: '',
    mdvp_rap: '',
    mdvp_ppq: '',
    jitter_ddp: '',
    mdvp_shimmer: '',
    mdvp_shimmer_db: '',
    shimmer_apq3: '',
    shimmer_apq5: '',
    mdvp_apq: '',
    shimmer_dda: '',
    nhr: '',
    hnr: '',
    rpde: '',
    dfa: '',
    spread1: '',
    spread2: '',
    d2: '',
    ppe: ''
  }

  const [parkinsonData, setParkinsonData] = useState(initial_data)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParkinsonData({ ...parkinsonData, [name]: value })
  }

  const handleClear = () => {
    setParkinsonData(initial_data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("The data of parkinsong's disease ", parkinsonData);
  }

  const paramss = [
    {
      type: "text",
      param_name: "Average vocal fundamental frequency",
      placeholder: "Enter mdvp fo hz",
      Name: "mdvp_fo_hz",
      U_id: "1"
    },
    {
      type: "text",
      param_name: "Maximum vocal fundamental frequency",
      placeholder: "Enter mdvp fhi hz",
      Name: "mdvp_fhi_hz",
      U_id: "2"
    },
    {
      type: "text",
      param_name: "Minimum vocal fundamental frequency",
      placeholder: "Enter mdvp flo hz",
      Name: "mdvp_flo_hz",
      U_id: "3"
    },
    {
      type: "text",
      param_name: "MDVP jitter in percent",
      placeholder: "Enter mdvp jitter in percent",
      Name: "mdvp_jitter_in_percent",
      U_id: "4"
    },
    {
      type: "text",
      param_name: "MDVP jitter abs",
      placeholder: "Enter mdvp jitter abs",
      Name: "mdvp_jitter_abs",
      U_id: "5"
    },
    {
      type: "text",
      param_name: "MDVP RAP",
      placeholder: "Enter mdvp rap",
      Name: "mdvp_rap",
      U_id: "6"
    },
    {
      type: "text",
      param_name: "MDVP PPQ ",
      placeholder: "Enter mdvp ppq",
      Name: "mdvp_ppq",
      U_id: "7"
    },
    {
      type: "text",
      param_name: "JITTER DDP",
      placeholder: "Enter jitter ddp",
      Name: "jitter_ddp",
      U_id: "8"
    },
    {
      type: "text",
      param_name: "MDVP SHIMMER",
      placeholder: "Enter mdvp shimmer",
      Name: "mdvp_shimmer",
      U_id: "9"
    },
    {
      type: "text",
      param_name: "MDVP SHIMMER DB",
      placeholder: "Enter mdvp shimmer db",
      Name: "mdvp_shimmer_db",
      U_id: "10"
    },
    {
      type: "text",
      param_name: "SHIMMER APQ3",
      placeholder: "Enter shimmer apq3",
      Name: "shimmer_apq3",
      U_id: "11"
    },
    {
      type: "text",
      param_name: "SHIMMER APQ5",
      placeholder: "Enter shimmer apq5",
      Name: "shimmer_apq5",
      U_id: "12"
    },
    {
      type: "text",
      param_name: "MDVP APQ",
      placeholder: "Enter mdvp apq",
      Name: "mdvp_apq",
      U_id: "13"
    },
    {
      type: "text",
      param_name: "SHIMMER DDA",
      placeholder: "Enter shimmer dda",
      Name: "shimmer_dda",
      U_id: "14"
    },
    {
      type: "text",
      param_name: "Noise to harmonic tone",
      placeholder: "Enter Noise to harmonic tone",
      Name: "nhr",
      U_id: "15"
    },
    {
      type: "text",
      param_name: "Harmonic tone to noise ratio",
      placeholder: "Enter Harmonic tone to noise ratio",
      Name: "hnr",
      U_id: "16"
    },
    {
      type: "text",
      param_name: "Status",
      placeholder: "Enter status",
      Name: "status",
      U_id: "17"
    },
    {
      type: "text",
      param_name: "Recurrence period density entropy",
      placeholder: "Enter Recurrence period density entropy",
      Name: "rpde",
      U_id: "18"
    },
    {
      type: "text",
      param_name: "Detrended fluctuation analysis",
      placeholder: "Enter Detrended fluctuation analysis",
      Name: "dfa",
      U_id: "19"
    },
    {
      type: "text",
      param_name: "Spread1",
      placeholder: "Enter Spread1",
      Name: "spread1",
      U_id: "20"
    },
    {
      type: "text",
      param_name: "Spread2",
      placeholder: "Enter Spread2",
      Name: "spread2",
      U_id: "21"
    },
    {
      type: "text",
      param_name: "Dopamine Receptors (d2) ",
      placeholder: "Enter Dopamine Receptors ",
      Name: "d2",
      U_id: "22"
    },
    {
      type: "text",
      param_name: "Pitch Period Entropy (PPE)",
      placeholder: "Enter Pitch Period Entropy",
      Name: "ppe",
      U_id: "23"
    }

  ]

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
          <h2 className="mx-auto" style={{ display: 'flex', justifyContent: 'center' }}>Patient Form for Parkinson Disease</h2>
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

            {
              paramss.map((par) => (
                <div className="form-group mt-2 font-weight-bold" key={par.U_id}>
                  <label htmlFor={par.Name} className="label">{par.param_name}</label>
                  <input
                    type={par.type}
                    className="form-control"
                    style={{ border: 'none', outline: 'none', fontSize: '1rem' }}
                    placeholder={par.placeholder}
                    value={parkinsonData[par.Name]}
                    name={par.Name}
                    id={par.Name}
                    onChange={handleChange}

                  />
                </div>
              ))}


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
