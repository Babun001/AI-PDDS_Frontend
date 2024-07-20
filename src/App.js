import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./Screens/Home";
import AboutUs from "./Screens/AboutUs";
import ContactUs from "./Screens/ContactUs";
import Service from "./Screens/Service";
import Info from "./Screens/Info.js";
import Diabetes from "./Screens/Disease Template/Diabetes.js";
import Kidney from "./Screens/Disease Template/Kidney.js";
import Liver from "./Screens/Disease Template/Liver.js";
import Ratina from "./Screens/Disease Template/Ratina.js";
import SkinCancer from "./Screens/Disease Template/SkinCancer.js";
import ParkinsonDisease from "./Screens/Disease Template/ParkinsonDisease.js";
import Alzheimer from './Screens/Disease Template/Alzheimer.js';
import BraibtnTumor from './Screens/Disease Template/BrainTumor.js';
import BreastCancer from  './Screens/Disease Template/BreastCancer.js';
import Covid from  './Screens/Disease Template/Covid.js';
import Heart from  './Screens/Disease Template/Heart.js';
import LungCancer from  './Screens/Disease Template/LungCancer.js';
import Pneumonia from  './Screens/Disease Template/Pheumonia.js';
import Tuberculosis from  './Screens/Disease Template/Tuberculosis .js';




import Sidebar from './Components/Sidebar.jsx';


function App() {
  return (
    <>
      <Router>
        <Sidebar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path="/Service" element={<Service />} />
          <Route exact path="/info" element={<Info/>}/>
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route exact path="/Diabetes" element={<Diabetes />} />
          <Route exact path="/Diabetes" element={<Diabetes />} />
          <Route exact path="/Kidney" element={<Kidney />} />
          <Route exact path="/Liver" element={<Liver />} />
          <Route exact path="/Ratina" element={<Ratina />} />
          <Route exact path="/SkinCancer" element={<SkinCancer />} />
          <Route exact path="/ParkinsonDisease" element={<ParkinsonDisease />} />
          <Route exact path="/Alzheimer" element={< Alzheimer />} />
          <Route exact path="/BrainTumor" element={< BraibtnTumor />} />
          <Route exact path="/BreastCancer" element={< BreastCancer />} />
          <Route exact path="/Covid" element={< Covid />} />
          <Route exact path="/Heart" element={< Heart />} />
          <Route exact path="/LungCancer" element={< LungCancer />} />
          <Route exact path="/Pneumonia" element={< Pneumonia />} />
          <Route exact path="/Tuberculosis" element={< Tuberculosis />} />
        </Routes>
      </Sidebar>
    </Router >
    </>
  );
}

export default App;
