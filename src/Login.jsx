

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// firebase feature 
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config/firebase";

// import logo from "./images/logo.png";   // <-- correct path to your image

import back from "./images/back.jpg"; 

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/Homepage");
    } catch (error) {
      alert(error.message);
    }
  };

  return (

    <>

    {/* <div className="login">
    <button onClick={() => navigate("/")}    >

 

  Back to Homepage
</button>
</div> */}


{/* 
<div className="login">
  <button onClick={() => navigate("/")}>
    <img 
      src={back} 
      alt="Warehouse Logo" 
      className="logo"
      style={{ width: "45px", marginRight: "-94px" }}
    />
   
  </button>
</div> */}









<div className="navbar">



<div className="login">
  <button onClick={() => navigate("/")}>
    <img 
      src={back} 
      alt="Warehouse Logo" 
      className="logo"
      // style={{ width: "45px", marginRight: "-94px" }}
    />
   
  </button>
</div>








<div className="na">
<h3><b><i>Daulatwal Godown's</i></b></h3></div>
</div>


    <center><br></br><br></br><br></br>







{/* <h3><b><i>Enter your email below to login to your account</i></b></h3> */}





<div className="card">
      <h2>Login</h2><br></br>

     
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit"> Login</button><br></br><br></br>
    


      </form>



      <p>New user? <br></br><button onClick={() => navigate("/Register")}>Register</button></p>
      </div>


    

    
    
    </center>

    </>
  );
}

export default Login;

