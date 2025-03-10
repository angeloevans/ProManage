import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductionProgramFilters from "../components/ProductionProgramFilters";

const ProductionManagement = () => {
  const [productionPrograms, setProductionPrograms] = useState([]);
  const [filteredPrograms, setFilteredPrograms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        setProductionPrograms(data);
        setFilteredPrograms(data);
      })
      .catch((error) => console.error("Error fetching production data:", error));
  }, []);

  const formatDateDisplay = (dateStr) => {
    const [day, month, year] = dateStr.split(".");
    return `${day}.${month}.${year}`;
  };

  const goToDetails = (docNum) => {
    navigate(`/production-details?docNum=${docNum}`);
  };

  return (
    <div className="mx-auto my-4 p-4 max-w-7xl">
      <h1 className="text-3xl font-semibold text-center mb-6">Διαχείριση Παραγωγής</h1>

      <ProductionProgramFilters
        productionPrograms={productionPrograms}
        updateFilteredPrograms={setFilteredPrograms}
      />

      <div className="overflow-x-auto max-h-[400px]">
        {filteredPrograms.length ? (
          <table className="min-w-full table-fixed bg-white rounded-lg shadow-md border-separate border-spacing-0">
            <thead className="bg-gray-700 text-white sticky top-0 z-10">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-light">Ημ/νία</th>
                <th className="px-4 py-2 text-left text-sm font-light">Γραμμή</th>
                <th className="px-4 py-2 text-left text-sm font-light">Προτεραιότητα</th>
                <th className="px-4 py-2 text-left text-sm font-light">Εντολή</th>
                <th className="px-4 py-2 text-left text-sm font-light">Κατάσταση</th>
                <th className="px-4 py-2 text-left text-sm font-light">Κωδ. Είδους</th>
                <th className="px-4 py-2 text-left text-sm font-light">Περιγραφή</th>
                <th className="px-4 py-2 text-left text-sm font-light">Ποστ/τα</th>
                <th className="px-4 py-2 text-left text-sm font-light">Επιλογή</th>
              </tr>
            </thead>
            <tbody className="bg-gray-50 divide-y divide-gray-200 text-sm">
              {filteredPrograms.map((program) => (
                <tr key={program.DocNum} className="hover:bg-gray-100">
                  <td className="px-4 py-2">{formatDateDisplay(program.StartDate)}</td>
                  <td className="px-4 py-2">{program.Code}</td>
                  <td className="px-4 py-2">{program.Priority}</td>
                  <td className="px-4 py-2">{program.DocNum}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                        program.Status === "Completed"
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {program.Status}
                    </span>
                  </td>
                  <td className="px-4 py-2">{program.ItemCode}</td>
                  <td className="px-4 py-2">{program.ItemName}</td>
                  <td className="px-4 py-2">{program.Qty}</td>
                  <td className="px-4 py-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-3 rounded"
                      onClick={() => goToDetails(program.DocNum)}
                    >
                      Επιλογή
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center mt-4 text-gray-600">Δεν βρέθηκαν εντολές παραγωγής.</p>
        )}
      </div>
    </div>
  );
};

export default ProductionManagement;
