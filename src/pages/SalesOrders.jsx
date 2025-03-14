import React, { useEffect, useState } from "react";
import SalesOrderFilter from "../components/SalesOrderFilter";
import GridTable from "../components/GridTable";

const SalesOrders = ({ userData }) => {
  const [salesOrders, setSalesOrders] = useState([]);
  const [filteredSalesOrders, setFilteredSalesOrders] = useState([]);

  useEffect(() => {    
    fetch("/data/salesorders.json") // Simulating fetch of sales orders
      .then((response) => response.json())
      .then((orders) => {
        setSalesOrders(orders); // Set sales orders data
        setFilteredSalesOrders(orders); // Initially no filter, so show all sales orders
      })
      .catch((error) => console.error("Error fetching sales orders:", error));
  }, []);

  const headers = filteredSalesOrders.length > 0 ? Object.keys(filteredSalesOrders[0]) : [];

  // Convert object values into rows for GridTable
  const rows = filteredSalesOrders.map((program) => Object.values(program));

  return (
    <div>
      <h2>Sales Orders</h2>
      <SalesOrderFilter
        salesData={salesOrders} // Pass full salesOrders data
        updateFilteredSalesData={setFilteredSalesOrders} // Pass function to update filtered data
        userData={userData} // Pass userData to filter the orders based on the logged-in user
      />

      {filteredSalesOrders.length ? (
        <>
          <p>Below is generated from component GridTable</p>
          <GridTable headers={headers} rows={rows} />
        </>
      ) : (
        <p className="text-center">No sales orders data available.</p>
      )}
    </div>
  );
};

export default SalesOrders;
