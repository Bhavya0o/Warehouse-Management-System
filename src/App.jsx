import React, { useEffect } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Landing from "./Landingpage";
import Login from "./Login";
import Admin from "./Admin";
import ProtectedRoutes from "./ProtectedRoutes";
import Plan from "./Plan";
import About from "./About";
import Why from "./Whyus";
import Contact from "./Contact";
import Feature from "./Features";
import Register from "./Register";
import HomePage from "./Homepage";
import Profile from "./Profile";
import Chatbot from "./Chatbot";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    h3: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h4: {
      fontWeight: 700,
      fontSize: "2rem",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Login" element={<Login />} />
          <Route
            path="/Admin"
            element={
              <ProtectedRoutes>
                <Admin />
              </ProtectedRoutes>
            }
          />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Plan" element={<Plan />} />
          <Route path="/About" element={<About />} />
          <Route path="/Features" element={<Feature />} />
          <Route path="/Why" element={<Why />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Homepage" element={<HomePage />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;














