import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    phone: "",
    email: "",
    message: "",
    age: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_oxfv4te",        // ✅ your SERVICE ID
      "template_b3yva9q",       // ✅ your TEMPLATE ID
      formData,
      "yZ04r6fqcsWF4zXbh"         
    )
    .then(() => {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        subject: "",
        phone: "",
        email: "",
        message: "",
        age: ""
      });
    })
    .catch(() => {
      alert("Failed to send message");
    });
  };

  return (
    
    
    
    
    
    <>














      <center>







 <nav> <h1>Contact Us</h1></nav> 
        
        {/* <h1>Contact Us</h1><br></br> */}

        <form className="contact" onSubmit={sendEmail}>

          <b>Name</b><br />
          <input
            type="text"
            name="name"

            class="rounded-input"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
          /><br /><br />

          <b>Subject</b><br />
          <input
            type="text"
            name="subject"
            class="rounded-input"
            placeholder="Enter Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          /><br /><br />

          <b>Phone No</b><br />
          <input
            type="number"
            name="phone"
            class="rounded-input"
            placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          /><br /><br />

          <b>Email</b><br />
          <input
            type="email"
            name="email"
            class="rounded-input"
            placeholder="Provide Email"
            value={formData.email}
            onChange={handleChange}
            required
          /><br /><br />

          <b>Message</b><br />
          <textarea
            name="message"
            placeholder="Send us Message"
            class="rounded-input"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <h5>Choose Age</h5>
          <select
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          >
            <option value="">Select Age</option>
            {[...Array(30)].map((_, i) => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}
          </select><br /><br />

          <button class="button-54" role="button" type="submit">
            Submit
          </button>









        </form>
      </center>
    </>
  );
}

export default Contact;
