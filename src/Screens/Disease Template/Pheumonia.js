
import {React, useState} from 'react';
import heartBg from "../../Assets/pneumoniabg.jpg";
import './Disease.css';
import { useNavigate } from "react-router-dom";
import { MdCloudUpload } from "react-icons/md";

export default function Pheumonia() {

  const navigator = useNavigate();

  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No Selected File");


  return (
    <>
      <div className="diabetes-container" style={{ display: "flex" }}>

        <div className="backbtn">
          <button className='btn btn-danger m-3' style={{ cursor: "pointer", fontWeight: "bold" }} onClick={() => navigator(-1)}>{"x"}</button>
        </div>
        <img className="BackgroundImage" src={heartBg} alt="bg-img" />

        <div className="patientform bg-text mt-5  sticky-top text-dark fs-6">
          {/* <h1>This is form area!</h1> */}
          <h2 className="mx-auto" style={{ display: 'flex', justifyContent: 'center' }}>Patient Form for Pheumonia</h2>
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


            <div className="FileUpload" onClick={() =>
              document.querySelector("#SelectImage").click()
            }>
              <input
                type="file"
                className="fileInp"
                id="SelectImage"
                hidden
                onChange={({ target: { files } }) => {
                  files[0] && setFileName(files[0].name)
                  if (files) {
                    setImage(URL.createObjectURL(files[0]))
                  }
                }}
              />
              {
                image
                  ?
                  <img src={image} width={300} height={200} alt={fileName} />
                  :
                  <>
                    <MdCloudUpload color='#1475cf' size={120} />
                    <p>Browse Files To Upload</p>
                  </>
              }
            </div>
            <span className='filenamespan'><u>{fileName}</u></span>


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
                onClick={() =>{
                  setImage(null);
                  setFileName("No Selected File");
                }}
                style={{ border: 'none', outline: 'none', fontSize: '1rem' }}>Clear Form</button>
            </div>

          </form>
        </div>
      </div>

    </>
  );
}
