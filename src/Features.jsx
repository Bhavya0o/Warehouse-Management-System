import React from "react";

import Wms from "./images/Wms.png";
import order from "./images/order.png";
import Optimization from "./images/Optimization.png";
import reporting from "./images/reporting.png";

function Feature() {
  return (
    <section className="feature-section">
      <h4 className="feature-subtitle">FEATURES</h4>
      <h1 className="feature-title">Warehouse Management System</h1>

      <div className="feature-container">
        {/* Inventory */}
        <div className="feature-card">
          <img src={Wms} alt="Inventory Management" />
          <h3>Inventory Management</h3>
          <p>Track and organize inventory levels</p>
        </div>

        {/* Order */}
        <div className="feature-card">
          <img src={order} alt="Order Processing" />
          <h3>Order Processing</h3>
          <p>Manage order fulfillment and shipping</p>
        </div>

        {/* Optimization */}
        <div className="feature-card">
          <img src={Optimization} alt="Warehouse Optimization" />
          <h3>Warehouse Optimization</h3>
          <p>Optimize storage space and layout</p>
        </div>

        {/* Reporting */}
        <div className="feature-card">
          <img src={reporting} alt="Reporting & Analytics" />
          <h3>Reporting & Analytics</h3>
          <p>Generate reports and analyze performance</p>
        </div>
      </div>
    </section>
  );
}

export default Feature;
