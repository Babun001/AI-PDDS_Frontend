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
// /Liver /Ratina  /SkinCancer  /ParkinsonDisease

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
        </Routes>
      </Sidebar>
    </Router >
    </>
  );
}

export default App;
