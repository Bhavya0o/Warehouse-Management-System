// import React, { useState } from "react";

// import { Link, UNSAFE_SingleFetchRedirectSymbol } from "react-router-dom";

// import { useNavigate } from "react-router-dom";


// import Contact from "./Contact";


// function  Register(){


// const [form, setForm] = useState({

// firstName: "",
// LastName: "",
// Email: "",
// ContactNo: "",
// Password: "",
// RepeatPassword: ""
// });

// const handleChange = (e) =>{

// setForm(prev => ({...prev, [e.target.name]: e.target.value}));
// };

// // validate simple things 

// const validate = () =>{

// const {firstName, LastName, Email, ContactNo, Password, RepeatPassword }= form;


// if(!firstName || !LastName , !Email, !ContactNo, !Password, !RepeatPassword){
// alert("please fill all the fields");
// return false;
// }

// if(Password.length < 7){

// alert("password should be at least 6 characters");
// return false;

// }

// if(Password !== RepeatPassword){

// alert("password do not match");
// return false;

// }

// return true;
// };


// const handleRegister = async (e) => {

// e.preventDefault();

// if(!validate()) return;

// setLoading(true);

// try{


// // 1 create a user in firebase auth

// const userCredential = await createuserwithEmaiolAndPassword(auth , form.Email, form.Password);

// const user = userCredential.user;

// // 2 

// await setDoc(doc, (db, "users", user.uid), {

// firstName: form.firstName,
// LastName: form.LastName,
// Email: form.Email,
// Contact: form.ContactNo,
// createdAt: new Date().toISOString()
// });



// alert("Registration successful. please login");
// Navigate("/");
// } catch (err){

// alert(err.message);
// }finally{
//         setLoading(false);
// }

// }


// return(
// <>


// <center>

// <h2>Register Form here </h2>   

// <div className="card">


//         <label>First Name</label>
//         <input name="firstName" value={form.firstName} onChange={handleChange} />


//         <label>Last Name </label>
//         <input name="Last Name" value={form.LastName} onChange={handleChange} />

//         <label>Email</label>
//         <input name="Email" value={form.Email} onChange={handleChange} />

//         <label>Contact No</label>
//         <input name="Contact No" value={form.ContactNo} onChange={handleChange} />

//         <label>Password</label>
//         <input name="Password" value={form.Password} onChange={handleChange} />

//         <label>Repeat Password</label>
//         <input name="Repeat Password" value={form.RepeatPassword} onChange={handleChange} />

        






// <button type="register" disabled={loading} style={{marginTop: 10}}>
        
//         {loading ? "Registering..." : "Register"}
//         </button>

// </div>



// <p>Already have an account </p><Link to="/Login">log-in</Link>




// </center>
// </>
// )
// } 

// export default Register;












import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config/firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registered Successfully!");
      navigate("/login"); // Redirect to login
    } catch (error) {
      alert(error.message);
    }
  };

  return (




    <center>


<div className="navbarr">


<h3><b><i>Daulatwal Godown's</i></b></h3><br></br></div><br></br><br></br>
<div className="card">
        
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button><br></br>
      </form><br></br>
      <p>Already have an account?<br></br> <button onClick={() => navigate("/login")}>Login</button></p>
      </div>

    {/* <button onClick={() => navigate("/")}>
  Back to Homepage
</button> */}

    



    </center>



  );
}

export default Register;








