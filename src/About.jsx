import React from "react";
import Revolve from "./images/Revolve.png";

const pillars = [
  {
    title: "Mission",
    description: "To simplify warehouse operations using modern automation.",
    accent: "#1976d2",
  },
  {
    title: "Vision",
    description: "To become a trusted leader in warehouse management solutions.",
    accent: "#1565c0",
  },
  {
    title: "Values",
    description: "Innovation, accuracy, transparency, and growth.",
    accent: "#0d47a1",
  },
];

function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <span className="about-badge">About Us</span>
        <h1>Revolutionizing Warehouse Operations</h1>
        <p>
          We help businesses of every size run smarter warehouses with technology
          built for speed, accuracy, and scale.
        </p>
      </div>

      <div className="about-main">
        <div className="about-content">
          <span className="about-content-label">WHO WE ARE</span>
          <h2>Empowering Modern Supply Chains</h2>
          <p>
            At <strong>Warehouse Pro</strong>, our mission is to empower businesses
            of all sizes with smart technology to streamline supply chains and
            optimize warehouse operations.
          </p>
          <p>
            From inventory tracking to order fulfillment, we deliver tools that
            reduce manual work, improve visibility, and help teams move faster
            with confidence.
          </p>
        </div>

        <div className="about-image-wrap">
          <img src={Revolve} alt="Warehouse operations" />
        </div>
      </div>

      <div className="about-pillars">
        <span className="about-pillars-label">OUR FOUNDATION</span>
        <h2>Mission, Vision &amp; Values</h2>
        <p className="about-pillars-subtitle">
          The principles that guide everything we build and every partnership we grow.
        </p>

        <div className="about-pillars-grid">
          {pillars.map((item) => (
            <article
              key={item.title}
              className="about-pillar-card"
              style={{ borderTopColor: item.accent }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="about-cta">
        <h3>Thank you for choosing us!</h3>
        <p>Ready to transform your warehouse? Let&apos;s build something great together.</p>
      </div>
    </section>
  );
}

export default About;
