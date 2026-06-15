import React from "react";

import whyus from "./images/whyus.png";
import dedicated from "./images/dedicated.png";
import Industry from "./images/Industry.png";
import partner from "./images/partner.png";

const benefits = [
  {
    image: whyus,
    title: "Scalable Architecture",
    description:
      "Our system grows with you. From your first order to thousands a day, our platform scales to meet your demands.",
  },
  {
    image: dedicated,
    title: "Dedicated Support",
    description:
      "Our team of experts is here to help you every step of the way, from onboarding to ongoing optimization.",
  },
  {
    image: Industry,
    title: "Industry Proven",
    description:
      "Trusted by leading e-commerce and logistics companies to manage their critical warehouse operations.",
  },
];

function Why() {
  return (
    <section className="why-us-page">
      <div className="why-us-hero">
        <span className="why-us-badge">Why Choose Us</span>
        <div className="why-us-hero-content">
          <div className="why-us-hero-text">
            <h1>A Partner in Your Success</h1>
            <p>
              We&apos;re more than just a software provider. We&apos;re a partner
              dedicated to helping you achieve your business goals with reliable
              tools and hands-on support.
            </p>
          </div>
          <div className="why-us-hero-image">
            <img src={partner} alt="Partnership illustration" />
          </div>
        </div>
      </div>

      <div className="why-us-benefits">
        <span className="why-us-benefits-label">OUR ADVANTAGES</span>
        <h2>What Sets Us Apart</h2>
        <p className="why-us-benefits-subtitle">
          Built for growth, backed by experts, and proven across the industry.
        </p>

        <div className="why-us-grid">
          {benefits.map((item) => (
            <article key={item.title} className="why-us-card">
              <div className="why-us-card-icon">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="why-us-stats">
        <div className="why-us-stat">
          <strong>99.9%</strong>
          <span>Uptime reliability</span>
        </div>
        <div className="why-us-stat">
          <strong>24/7</strong>
          <span>Expert support</span>
        </div>
        <div className="why-us-stat">
          <strong>500+</strong>
          <span>Businesses served</span>
        </div>
      </div>
    </section>
  );
}

export default Why;
