import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./Screens/Home";
import AboutUs from "./Screens/AboutUs";
import ContactUs from "./Screens/ContactUs";
import Service from "./Screens/Service";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar>
          <Routes>
            <Route  path='/' element={<Home />} />
            <Route exact path="/AboutUs" element={<AboutUs />} />
            <Route exact path="/ContactUs" element={<ContactUs />} />
            <Route exact path="/Service" element={<Service />} />
          </Routes>
        </Navbar>
      </Router>

    </>
  );
}

export default App;
