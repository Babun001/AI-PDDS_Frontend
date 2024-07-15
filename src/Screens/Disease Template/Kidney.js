import kidneyimg from "../../Assets/kidney.jpg";
import { useNavigate } from "react-router-dom"
import './Disease.css';

export default function Diabetes() {

    const navigator = useNavigate();
    const getOpt = () => {
        alert(`backend is not ready yet!`)
    }

    return (
        <>
            <div className="kidneybg" >

            </div>

            {/* <div className="kidney-container" style={{ display: "flex" }}>
                <div className="backbtn">
                    <button className='btn' style={{ fontSize: "2rem", cursor: "pointer", fontWeight: "bold" }} onClick={() => navigator(-1)}>{"x"}</button>
                </div>


                <div className="patientform bg-text mt-5  sticky-top text-dark fs-6">
                    <h2 className="mx-auto" style={{ display: 'flex', justifyContent: 'center' }}>Patient Form for Kidney Disease</h2>


                    <form>
                        <div className="form-group mt-2 font-weight-bold" >
                            <label htmlFor="firstName" className="label">Full Name</label>
                            <input type="text" className="form-control" style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="firstName" placeholder="Enter Your Name" />
                        </div>

                        
                        <div className="form-group mt-2 font-weight-bold" >
                            <label htmlFor="DOB" className="label">Age</label>
                            <input type="text" className="form-control" style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="firstName" placeholder="Enter Your Age" />
                        </div>


                        <div className="form-group mt-3">
                            <label htmlFor="gender">Gender</label>
                            <select className="form-control" style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="gender">
                                <option defaultValue>Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>


                        <div className="form-group mt-3">
                            <label htmlFor="pregnancy">Pregnancy</label>
                            <select className="form-control" style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="pregnancy">
                                <option defaultValue >Are You Pregnat?</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>


                        <div className="form-group mt-3">
                            <label htmlFor="Glucose">Glucose</label>
                            <input type="text" className="form-control" style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="Glucose" placeholder="Enter Glucose level" />
                        </div>


                        <div className="form-group mt-3">
                            <label htmlFor="BloodPressure">BloodPressure</label>
                            <input type="text" className="form-control" style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="BloodPressure" placeholder="Enter Your Blood Pressure" />
                        </div>


                        <div className="form-group mt-3">
                            <label htmlFor="Insulin">Insulin</label>
                            <input type="text" className="form-control" style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="Insulin" placeholder="Enter Your Insulin Rate" />
                        </div>


                        <div className="form-group mt-3">
                            <label htmlFor="BMI">BMI</label>
                            <input type="text" className="form-control" style={{ border: 'none', outline: 'none', fontSize: '1rem' }} id="BMI" placeholder="Enter Your BMI Rate" />
                        </div>


                        <div className="buttons">
                            <button type="button" className="btn btn-success" style={{ border: 'none', outline: 'none', fontSize: '1rem' }} onClick={getOpt}>Check</button>
                            {/* create a popup window to show the output */}
                            {/* <button type="reset" className="btn btn-danger" style={{ border: 'none', outline: 'none', fontSize: '1rem' }}>Clear Form</button> */}
                        {/* </div> */} 
                    {/* // </form> */}
                {/* </div> */}
            {/* </div>*/} 
        </>

    );
}
