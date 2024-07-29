import video02 from "../../Assets/Doctor02.mp4";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import './Disease.css';

export default function Diabetes() {

    const navigator = useNavigate();


    const [data, setData] = useState({
        Pregnancies: "",
        Glucose: "",
        BloodPressure: "",
        Insulin: "",
        BMI: "",
        DiabetesPedigreeFunction: "",
        Age: ""
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        await fetchApi();
    };


    const fetchApi = async () => {
        try {
            const result = await axios.get('http://127.0.0.1:8080/api/db', {
                params: {
                    Pregnancies: data.Pregnancies,
                    Glucose: data.Glucose,
                    BloodPressure: data.BloodPressure,
                    Insulin: data.Insulin,
                    BMI: data.BMI,
                    DiabetesPedigreeFunction: data.DiabetesPedigreeFunction,
                    Age: data.Age
                }
            })
            alert(result.data);
            console.log(result);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }

    }



    return (
        <>
            <div className="diabetes-container" style={{ display: "flex" }}>

                <div className="bg-video">
                    <video className='video-clip' src={video02} autoPlay muted loop />
                </div>
                <div className="backbtn">
                    <button className='btn btn-danger m-3' style={{ cursor: "pointer", fontWeight: "bold" }} onClick={() => navigator(-1)}>{"x"}</button>
                </div>
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


                        <div className="form-group mt-2 font-weight-bold" >
                            <label htmlFor="DOB" className="label">Age</label>
                            <input
                                type="text"
                                className="form-control"
                                style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="firstName"
                                placeholder="Enter Your Age"
                                name="Age"
                                onChange={handleChange}

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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
                            />
                        </div>


                        <div className="buttons">
                            <button
                                type="button"
                                className="btn btn-success"
                                style={{ border: 'none', outline: 'none', fontSize: '1rem' }}
                                onClick={handleSubmit}>Check</button>
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
