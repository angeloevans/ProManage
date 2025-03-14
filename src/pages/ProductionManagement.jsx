// Production Management Page
import React, { useEffect, useState } from "react";
import ProductionProgramFilters from "../components/ProductionProgramFilters";
import GridTableSelection from "../components/GridTableSelection";

const ProductionManagement = () => {
  const [productionPrograms, setProductionPrograms] = useState([]);
  const [filteredPrograms, setFilteredPrograms] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")  //Fetch our data from local JSON file, this could change to another API 
      .then((response) => response.json())
      .then((data) => {
        setProductionPrograms(data);
        setFilteredPrograms(data);
      })
      .catch((error) => console.error("Error fetching production data:", error));
  }, []);

  // Extract headers dynamically from the first object in filteredPrograms
  const headers = filteredPrograms.length > 0 ? Object.keys(filteredPrograms[0]) : [];

  // Convert object values into rows
  const rows = filteredPrograms.map((program) => Object.values(program));

  const detailsPage = "production-details";   // Use route path instead of a file path
  const keyName = "DocNum"; // Explicitly define the key column
  const keyIndex = headers.indexOf(keyName); // Find the position of the key column dynamically

  return (
    <div className="production-table-wrapper mx-auto my-4 p-4 max-w-7xl">
      <h1 className="text-3xl font-semibold text-center mb-6">Production Management</h1>
      <ProductionProgramFilters
        productionPrograms={productionPrograms}
        updateFilteredPrograms={setFilteredPrograms}
      />

      {filteredPrograms.length ? (
        <>
          <p>Below is generated from component GridTableSelection component</p>
          <GridTableSelection 
            headers={headers} 
            rows={rows} 
            detailsPage={detailsPage} 
            keyName={keyName} 
            keyIndex={keyIndex} 
          />
        </>
      ) : (
        <p className="text-center">No production data available.</p>
      )}
    </div>
  );
};

export default ProductionManagement;