import React from "react";





import whyus from "./images/whyus.png";

import dedicated from "./images/dedicated.png";

import Industry from "./images/Industry.png";

import partner from  "./images/partner.png";


function Why(){




return(
<>







<center>
<div className="why">

<p>Why Choose Us?  </p></div><br></br>
<br></br><br></br>




<img className="partner_image" src={partner} alt="picture"/>





<h1> A Partner in Your Success </h1><br></br>

<i>We're more than just a software provider. We're a partner dedicated to helping you achieve your business goals  </i>

<br></br><br></br><hr></hr>
<img src={whyus} alt="select"/>

<h2>Scalabel Architecture</h2>
<br></br>
<i>Our system grows with you. From your first order to thousands a day, our platform scales to meet your demands.</i>

<br></br><br></br><hr></hr>
<img src={dedicated} alt="dedicated"/>
<h2>Dedicated Support</h2>
<br></br>

<i> Our team of experts is here to help you every step of the way, from onboarding to ongoing optimization.  </i>

<br></br><hr></hr>

<img src={Industry} alt="Industry"/><br></br>

<h2>Industry Proven</h2>
<br></br>
<i> Trusted by leading e-commerce and logistics companies to manage their critical warehouse operations. </i>








</center>











</>
)
}
export default Why;
