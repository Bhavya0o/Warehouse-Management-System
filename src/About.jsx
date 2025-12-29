import React from "react";
import Revolve from "./images/Revolve.png";

function About() {
  return (
    <>
      <div className="about-wrapper">

        {/* Title */}
        <div className="about-title">
          <span>About Us</span>
          <h1>Revolutionizing Warehouse Operations</h1>
        </div>

        {/* Main Section */}
        <div className="about-container">

          {/* Left Content */}
          <div className="about-card">
            <h2>Who We Are</h2>
            <p>
              At <b>Warehouse Pro</b>, our mission is to empower businesses of all
              sizes with smart technology to streamline supply chains and
              optimize warehouse operations.
            </p>

            <div className="about-features">
              <div className="feature-box">
                <h3>🚀 Mission</h3>
                <p>To simplify warehouse operations using modern automation.</p>
              </div>

              <div className="feature-box">
                <h3>👁 Vision</h3>
                <p>To become a trusted leader in warehouse management solutions.</p>
              </div>

              <div className="feature-box">
                <h3>💡 Values</h3>
                <p>Innovation, Accuracy, Transparency & Growth.</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="about-image">
            <img src={Revolve} alt="Warehouse" />
          </div>

        </div>

        <div className="about-footer">
          <h3>Thank you for choosing us!</h3>
        </div>

      </div>
    </>
  );
}

export default About;
