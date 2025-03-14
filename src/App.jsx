// App 
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
// import our components & pages
import NavBar from "./components/NavBar";
import Login from "./components/LoginPage";
import HomePage from "./pages/Home";
import ProductionProgram from "./pages/ProductionProgram";
import ProductionManagement from "./pages/ProductionManagement";
import ProductionDetails from "./components/ProductionDetails";
import SalesOrders from "./pages/SalesOrders";  // SalesOrders Page

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);   // Store user data after login
  const navigate = useNavigate();   // Navigate hook for routing

  // Check if user is logged in by fetching data from localStorage
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (username, password) => {
    fetch("/data/users.json") // this could be another API
      .then((response) => response.json())
      .then((users) => {
        const user = users.find(
          (user) => user.username === username && user.password === password
        );

        if (user) {
          setIsLoggedIn(true);
          setUserData(user);  // Store user data after successful login
          localStorage.setItem("userData", JSON.stringify(user));   // Save to localStorage
          navigate("/");  // Navigate to the home page
        } else {
          alert("Invalid username or password.");
        }
      })
      .catch((error) => console.error("Error fetching users:", error));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);  // Clear user data on logout
    localStorage.removeItem("userData");  // Remove from localStorage
    navigate("/login");   // Redirect to login page
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <NavBar userData={userData} handleLogout={handleLogout} />
          <div className="p-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              
              {/* Production-related routes, only if user is in the 'production' department OR admin*/}
              {userData && (userData.department === "production" || userData.department === "admin") && (
                <>
                  <Route path="/production-program" element={<ProductionProgram />} />
                  <Route path="/production-management" element={<ProductionManagement />} />
                  <Route path="/production-details" element={<ProductionDetails />} />
                </>
              )}
              
              {/* Sales Orders, only if user is in the 'sales' department OR admin */}
              {userData && (userData.department === "sales" || userData.department === "admin")  && (
                <Route path="/sales-orders" element={<SalesOrders userData={userData} />} />
              )}
              
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
};

export default App;