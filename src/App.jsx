import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { db } from "./config/firebase";
// import { collection, addDoc, getDocs } from "firebase/firestore";

// import Ap from "./Des";          // your existing component
// import Login from "./Login";     // new
// import Register from "./Register"; // new

//import Login from "./Login";
import Landing from "./Landingpage";

import Login from "./Login";

import About from "./About";

import Why from "./Whyus";

import Contact from "./Contact";

import Feature from "./Features";

import Register from "./Register";

import HomePage from "./Homepage";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Features" element={<Feature />} />
          <Route path="/Why" element={<Why />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Contact" element={<Contact />} />
           <Route path="/Homepage" element={<HomePage/>} />
        
        </Routes>
      </Router>

      {/* <Landing/> */}

      {/* <Login/> */}
    </>
  );
}

export default App;
