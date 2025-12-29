import React, { useState } from "react";

function Plan() {
  const plans = [
    { id: 1, name: "Basic Plan", price: 50 },
    { id: 2, name: "Gold Plan", price: 100 },
    { id: 3, name: "Platinum Plan", price: 150 },
    { id: 4, name: "Ultra Plan", price: 200 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (plan) => {
    setCart([...cart, plan]);
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Choose Your Plan</h2>

<center>
      <div className="planss"><br></br>

      {/* PLANS */}
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {plans.map((plan) => (
          <div
            key={plan.id}
            style={{
              border: "1px solid #840909ff",
              padding: "20px",
              width: "200px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h3>{plan.name}</h3>
            <p>₹{plan.price} / month</p>

            {/* <button
              onClick={() => addToCart(plan)}
              style={{
                padding: "10px 20px",
                borderRadius: "20px",
                
                background: "green",
                color: "white",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button> */}



<button class="button"   onClick={() => addToCart(plan)}>Add </button>






          </div>
        ))}
      </div>
      </div><br></br>
      {/* </center> */}

      {/* CART */}


      <div className="cart">
      <h2><b>Cart</b></h2>

      {cart.length === 0 ? (
        <i>Cart is empty</i>
      ) : (
        
        
        
        <ul style={{ textAlign: "center", listStyle: "bold" }}>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}
      </div>
      </center>
    </>
  );
}

export default Plan;
