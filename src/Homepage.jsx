import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./config/firebase";

import ProductPieChart from "./ProductPieChart";


function Homepage() {
  const navigate = useNavigate();

  // 🔐 Auth check
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

  // 📦 State
  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("Dashboard");

  const [shipments] = useState([
    { id: 1, name: "Shipment 1", status: "In Transit" },
    { id: 2, name: "Shipment 2", status: "Delivered" },
  ]);

  const [orders, setOrders] = useState([
    { id: 1, product: "Laptop", status: "Pending" },
    { id: 2, product: "Mobile", status: "Completed" },
     { id: 3, product: "pc", status: "Completed" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState("");
  const [newStatus, setNewStatus] = useState("Pending");

  const menuItems = [
    "Dashboard",
    "Orders",
    "Shipments",
    "Reports",
    "Suppliers",
    "Analytics",
  ];

  const handleAddOrder = (e) => {
    e.preventDefault();
    if (!newProduct) return;

    setOrders([
      ...orders,
      {
        id: orders.length + 1,
        product: newProduct,
        status: newStatus,
      },
    ]);

    setNewProduct("");
    setNewStatus("Pending");
    setShowForm(false);
  };

  // 📊 Dynamic content
  const renderContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return (
          <>
            <h2>Dashboard Overview</h2>
            <p>Welcome to Daulatwal Godown Dashboard</p>

            <div className="dashboard-cards">
              <div className="card">Total Orders: {orders.length}</div>
              <div className="card">Total Shipments: {shipments.length}</div>
            </div>
          </>
        );

      case "Orders":
        return (
          <>
            <div className="orders-header">
              {/* <h2>Orders</h2> */}
              <button
                className="addproducts"
                onClick={() => setShowForm(!showForm)}
              >
                + Add Product
              </button>
            </div>

            {showForm && (
              <div className="order-form">
                <form onSubmit={handleAddOrder}>
                  <input
                    type="text"
                    placeholder="Product name"
                    value={newProduct}
                    onChange={(e) => setNewProduct(e.target.value)}
                    required
                  />

                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                  <option value="Completed">Hold</option>
                  </select>

                  <button type="submit" className="btn">
                    Save
                  </button>
                </form>
              </div>
            )}

            <div className="table-wrapper">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o) => (
                    <tr key={o.id}>
                      <td>{o.id}</td>
                      <td>{o.product}</td>
                      <td>{o.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        );

      case "Shipments":
        return (
          <>
            <h2>Shipments</h2>
            <ul>
              {shipments.map((s) => (
                <li key={s.id}>
                  {s.name} — <b>{s.status}</b>
                </li>
              ))}
            </ul>
          </>
        );

      case "Reports":
        return <h2>Reports Section</h2>;

      case "Suppliers":
        return <h2>Suppliers Section</h2>;

    case "Analytics":
  return (
    <>
    <center>
      <div className="analytics-container">
      <h1>Analytics</h1>

      <div className="chart-card">
        <h4>Products Distribution</h4>
        <ProductPieChart orders={orders} />
        
        
        </div>
      </div>
      </center>
    </>
  );


      default:
        return null;
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <button className="btn" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <h3>Daulatwal Godown's</h3>
        <button className="btn logout" onClick={handleLogout}>
          Logout
        </button>
      </nav>

      {/* Layout */}
      <div className="layout">
        {isOpen && (
          <aside className="sidebar">
            <ul>
              {menuItems.map((item) => (
                <li
                  key={item}
                  onClick={() => setActiveSection(item)}
                  className={activeSection === item ? "active" : ""}
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        )}

        <main className="content">{renderContent()}</main>
      </div>
    </>
  );
}

export default Homepage;
