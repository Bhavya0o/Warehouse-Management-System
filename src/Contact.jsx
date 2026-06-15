import React, { useState } from "react";
import emailjs from "emailjs-com";

const contactDetails = [
  {
    title: "Email",
    value: "support@warehousepro.com",
    description: "We reply within 24 hours on business days.",
  },
  {
    title: "Phone",
    value: "+1 (555) 123-4567",
    description: "Mon–Fri, 9:00 AM – 6:00 PM.",
  },
  {
    title: "Office",
    value: "123 Logistics Ave, Suite 400",
    description: "Visit us for demos and onboarding sessions.",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    phone: "",
    email: "",
    message: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_oxfv4te",
        "template_b3yva9q",
        formData,
        "yZ04r6fqcsWF4zXbh",
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          subject: "",
          phone: "",
          email: "",
          message: "",
          age: "",
        });
      })
      .catch(() => {
        alert("Failed to send message");
      });
  };

  return (
    <section className="contact-page">
      <div className="contact-hero">
        <span className="contact-badge">Contact Us</span>
        <h1>Get in Touch</h1>
        <p>
          Have a question about our warehouse platform? Send us a message and
          our team will get back to you as soon as possible.
        </p>
      </div>

      <div className="contact-main">
        <div className="contact-info">
          <span className="contact-info-label">REACH US</span>
          <h2>We&apos;d love to hear from you</h2>
          <p>
            Whether you need a product demo, pricing details, or technical
            support, our team is ready to help you streamline your warehouse
            operations.
          </p>

          <div className="contact-details">
            {contactDetails.map((item) => (
              <article key={item.title} className="contact-detail-card">
                <h3>{item.title}</h3>
                <strong>{item.value}</strong>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={sendEmail}>
          <h2>Send a Message</h2>
          <p className="contact-form-subtitle">
            Fill in the form below and we&apos;ll respond shortly.
          </p>

          <div className="contact-form-grid">
            <div className="contact-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="age">Age</label>
              <select
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              >
                <option value="">Select age</option>
                {[...Array(30)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="contact-field contact-field-full">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field contact-field-full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us how we can help..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button className="contact-submit" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
