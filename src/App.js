import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./Screens/Home";
import AboutUs from "./Screens/AboutUs";
import ContactUs from "./Screens/ContactUs";
import Service from "./Screens/Service";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path="/AboutUs" element = {<AboutUs />}/>
        <Route exact path="/ContactUs" element = {<ContactUs />}/>
        <Route exact path="/Service" element = {<Service />}/>
      </Routes>
    </Router>

    </>
  );
}

export default App;
