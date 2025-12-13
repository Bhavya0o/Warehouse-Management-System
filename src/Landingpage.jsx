import React from "react";

// import myphoto from '/src/images/myphoto.png';

import MyPhoto from "./images/myphoto.png";

import Rel from "./images/rel.png";

import warehouse from "./images/warehouse.jpg";

import logo from "./images/logo.png";

import del from "./images/del.png";

import login from "./images/login.jpg";

import { Link } from "react-router-dom";




function Landing() {
  return (
    <>
      {/* <div class="navbar"> */}
     


{/* <div className="nav">
<Link to="/Features">Features</Link>
       
<Link to="/Why">Why-Us</Link>

<Link to="/About">About</Link>
        
<Link to="/contact">Contact</Link>

 <button><Link to="/Login">Login</Link></button>

      <img className="login_image" src={login} alt="login" /> </div>
      </div> */}
     
{/* <div className="nav">
  <div className="nav-left">
    <Link to="/Features">Features</Link>
    <Link to="/Why">Why-Us</Link>
    <Link to="/About">About</Link>
    <Link to="/contact">Contact</Link>
  </div>

  <div className="nav-right">
    <button>
      <Link to="/Login">Login</Link>
    </button>

    <img className="login_image" src={login} alt="login" />
  </div>
</div>
 */}

<div className="navbar">
  <div className="navbar-left">
    <img src={logo} alt="Warehouse Logo" className="logo" />
   
  </div>

  <div className="navbar-center">
    <Link to="/Features">Features</Link>
    <Link to="/Why">Why-Us</Link>
    <Link to="/About">About</Link>
    <Link to="/contact">Contact</Link>
  </div>

  <div className="navbar-right">
    <button className="login-btn">
      <Link to="/Login">Login</Link>
    </button>
    {/* <img className="login_image" src={login} alt="login" /> */}
  </div>
</div>















      <div className="content">
        <div className="heading">


 <div className="color"> <h3><i>Daulatwal Godown's</i></h3></div><br></br><br></br>

<h1>
            Intelligent Warehouse Management,<br></br>
            Simplified.
          </h1>
        </div>
        <br></br>

        {/* <div className=".hero-content"> */}

        <div className="hero-image">
          <img src={warehouse} alt="Warehouse" />
        </div>








      {/* </div> */}

    
      </div>


<center>
<div className="bg">
      <br></br>
      <p>
        From inventory tracking to order fulfillment, Warehouse Pro 
        provides the tools you need to optimize your supply chain and scale your
        business.
      </p>




      {/* </div> */}

      <br></br>

      <div className="button">



      <button type="button" class="btn btn-success">
          Get started for free
        </button>


 <button type="button" class="btn btn-light">
          View Demo
        </button>
      </div>



      <hr></hr>
</div>
</center>
      <center>
        key Features<br></br>
        <h1>Built for Efficiency </h1>
        <p>
          Our platform is designed to streamline your operations, reduce errors,
          and provide real-time visibility into your entire warehouse.
        </p>
      </center>
      <br></br>

      <div class="container">
        <div class="feature-card">
          <img
            src={MyPhoto}
            alt="Warehouse Feature 1"
            style={{ width: "100%", maxWidth: "300px", height: "auto" }}
          />
          <p>
            <strong>Real-Time Inventory Control</strong>
            <br />
            Never lose track of your stock again. Monitor inventory levels
            across multiple locations, get low-stock alerts, and automate
            reordering processes.
          </p>
        </div>

        <div class="feature-card">
          <img
            src={Rel}
            alt="Warehouse Feature 2"
            style={{ width: "90%", maxWidth: "300px", height: "auto" }}
          />
          <p>
            <strong>Actionable Analytics</strong>
            <br />
            Make data-driven decisions. Our analytics dashboard provides
            insights into sales trends, inventory turnover, and fulfillment
            performance.
          </p>
        </div>
      </div>

      <hr></hr>

      {/* bootstrap sections start here  */}

      <section class="pricing">
        <h3>Pricing</h3>
        <h1>Plans for Every Stage</h1>
        <p>
          Whether you're just starting out or running a large-scale operation,
          we have a plan that fits your needs.
        </p>

        <div class="pricing-container">
         
          <div class="card">
            <div class="card_image">
              <img src={del} alt="premium plan" />
            </div>

            <div class="card_header">
             
              <h3>Basic plan</h3>
            </div>
            <div class="card_description">
             
              $50/weekly up to 200 orders/weekly premium inventory Management
            </div>

            <div className="card_button">
            <button>buy</button>
            </div>
          </div>

          <div class="card">
            <div class="card_image">
              <img src={del} alt="premium plan" />
            </div>

            <div class="card_header">
             
              <h3>gold plan</h3>
            </div>
            <div class="card_description">
             
              $50/weekly up to 200 orders/weekly premium inventory Management
            </div>

            <div className="card_button">
            <button>buy</button>
            </div>
          </div>




          <div class="card">
            <div class="card_image">
              <img src={del} alt="premium plan" />
            </div>

            <div class="card_header">
             
              <h3> platinum plan </h3>
            </div>
            <div class="card_description">
             
              $50/weekly up to 200 orders/weekly premium inventory Management
            </div>

            <div className="card_button">
            <button>buy</button>
            </div>
          </div>

      



          <div class="card">
            <div class="card_image">
              <img src={del} alt="premium plan" />
            </div>

            <div class="card_header">
             
              <h3>ultra plan</h3>
            </div>
            <div class="card_description">
             
              $50/weekly up to 200 orders/weekly premium inventory Management
            </div>

            <div className="card_button">
            <button>buy</button>
            </div>
          </div>
        </div>
      </section>

      <hr></hr>

      <center>
        <h1>
          Ready to Transform Your<br></br> Warehouse?
        </h1>
        <br></br>

        <p>
          Sign up today and get started with a free plan. No credit card
          required.
        </p>
        <br></br>

        <button type="button" class="btn btn-primary btn-lg">
          Know more About 
        </button>
      </center>

      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>
      <br></br>
      <br></br>





      <div className="footer section">
        <h3>Support</h3>
        <ul>
          <li>
            <a href="#">Help center</a>
          </li>
          <li>
            <a href="#">Faq</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
        </ul>
      </div>

      <div className="footer section">
        <h3>Follow us!</h3>
        <ul>
          <li>
            <a href="#">facebook</a>{" "}
          </li>
          <li>
            <a href="#">Twitter </a>{" "}
          </li>
          <li>
            <a href="#">Instagram </a>{" "}
          </li>
        </ul>
      </div>
    </>
 




);
}

export default Landing;
