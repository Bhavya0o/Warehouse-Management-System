

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./config/firebase";
import wms from "./images/wms.jpg";

import { HiArrowLeftOnRectangle } from "react-icons/hi2";

function Homepage() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) navigate("/login");
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("Dashboard");

  const toggleSidebar = () => setIsOpen(!isOpen);


// for shipments 

const [shipments, SetShipments] = useState([

{id: 1, name:"shipment 1", status: "In Transit" },
{id: 2, name:"shipment 2", status: "Delivered" },

]);


  const menuItems = [
    "Dashboard",
    "Orders",
    "Shipments",
    "Reports",
    "Suppliers",
    "Analytics",
  ];

  return (
    <center>
     
      <nav
        style={{
          width: "100%",
          backgroundColor: "#3c3b3b",
          padding: "10px 0",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <button
          onClick={toggleSidebar}
          style={{
            backgroundColor: "#5e5e5e",
            color: "white",
            border: "none",
            padding: "7px 32px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          ☰
        </button> <b><h3><i>Daulatwal Godown's</i></h3></b>

{/* for logout button  */}

        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "green",
            color: "white",
            border: "none",
            padding: "8px 12px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>

      </nav>

      <div style={{ display: "flex" }}>
        {/* ================= SIDEBAR ================= */}
        {isOpen && (
          <div
            style={{
              height: "100vh",
              backgroundColor: "#747171",
              color: "white",
              width: "220px",
              paddingTop: "40px",
            }}
          >
            <ul style={{ listStyle: "none", padding: "0" }}>
              {menuItems.map((item) => (
                <li
                  key={item}
                  onClick={() => setActiveSection(item)}
                  style={{
                    padding: "14px 20px",
                    cursor: "pointer",
                    backgroundColor:
                      activeSection === item ? "rgba(255,255,255,0.2)" : "transparent",
                    transition: "0.2s",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

      

        
       
      </div>
    </center>
  );
}

export default Homepage;



// import React from "react";

// function Homepage(){


// return(


// <div>

// <div>

//   <li className='bi bi-bootstrap-fill'></li>
//   <span className='brand-name fs-4'> yousaf </span>
// </div>

// <div className='list-group list-group'></div>


// </div> 

// )



// }
