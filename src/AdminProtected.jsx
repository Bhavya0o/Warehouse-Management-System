import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { useEffect, useState } from "react";

function AdminProtected({ children }) {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const role = localStorage.getItem("role");

      if (user && role === "admin") {
        setAllowed(true);
      } else {
        setAllowed(false);
      }
      setLoading(false);
    });
  }, []);

  if (loading) return <h3>Checking access...</h3>;

  return allowed ? children : <Navigate to="/login" />;
}

export default AdminProtected;
