import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home";
import ProductionProgramTable from "./components/ProductionProgramTable"; 
import ProductionManagement from "./components/ProductionManagement";
import ProductionDetails from "./components/ProductionDetails";

const App = () => {
  return (
    <Router>
      <NavBar /> {/* Add NavBar here */}
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/production-program" element={<ProductionProgramTable />} />
          <Route path="/production" element={<ProductionManagement />} />
          <Route path="/production-details" element={<ProductionDetails />} /> {/* Define the route for ProductionDetails */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
