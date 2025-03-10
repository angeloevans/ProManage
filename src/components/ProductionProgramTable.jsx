import React, { useEffect, useState } from "react";
import ProductionProgramFilters from "./ProductionProgramFilters";

const ProductionProgramTable = () => {
  const [productionPrograms, setProductionPrograms] = useState([]);
  const [filteredPrograms, setFilteredPrograms] = useState([]);

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

  return (
    <div className="production-table-wrapper mx-auto my-4 p-4 max-w-7xl">
      <h1 className="text-3xl font-semibold text-center mb-6">Πρόγραμμα Παραγωγής</h1>
      <ProductionProgramFilters
        productionPrograms={productionPrograms}
        updateFilteredPrograms={setFilteredPrograms}
      />

      {filteredPrograms.length ? (
        <div className="overflow-x-auto max-h-[400px]"> {/* Set height for scrolling */}
          <table className="min-w-full table-fixed bg-white rounded-lg shadow-md border-separate border-spacing-0">
            <thead className="bg-gray-700 text-white text-xs sticky top-0 z-10"> {/* Sticky header */}
              <tr>
                <th className="px-3 py-2 text-left font-light">Ημ/νία</th>
                <th className="px-3 py-2 text-left font-light">Γραμμή</th>
                <th className="px-3 py-2 text-left font-light">Προτεραιότητα</th>
                <th className="px-3 py-2 text-left font-light">Εντολή</th>
                <th className="px-3 py-2 text-left font-light">Κατάσταση</th>
                <th className="px-3 py-2 text-left font-light">Κωδ. Είδους</th>
                <th className="px-3 py-2 text-left font-light">Περιγραφή</th>
                <th className="px-3 py-2 text-left font-light">Ποστ/τα</th>
                <th className="px-3 py-2 text-left font-light">Ολοκληρώθηκαν</th>
                <th className="px-3 py-2 text-left font-light">Πελάτης</th>
                <th className="px-3 py-2 text-left font-light">Παραγγελία</th>
                <th className="px-3 py-2 text-left font-light">Σχόλια</th>
              </tr>
            </thead>

            <tbody className="bg-gray-50 divide-y divide-gray-200 text-xs"> {/* Smaller font size */}
              {filteredPrograms.map((program) => (
                <tr key={program.DocNum} className="hover:bg-gray-100">
                  <td className="px-3 py-2">{formatDateDisplay(program.StartDate)}</td>
                  <td className="px-3 py-2">{program.Code}</td>
                  <td className="px-3 py-2">{program.Priority}</td>
                  <td className="px-3 py-2">{program.DocNum}</td>
                  <td className="px-3 py-2">
                    <span
                      className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                        program.Status === "Completed" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                      }`}
                    >
                      {program.Status}
                    </span>
                  </td>
                  <td className="px-3 py-2">{program.ItemCode}</td>
                  <td className="px-3 py-2">{program.ItemName}</td>
                  <td className="px-3 py-2">{program.Qty}</td>
                  <td className="px-3 py-2">{program.Ολοκληρώθηκαν}</td>
                  <td className="px-3 py-2">{program.Πελάτης}</td>
                  <td className="px-3 py-2">{program.Παραγγελία}</td>
                  <td className="px-3 py-2">{program.Σχόλια}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center mt-4 text-gray-600">Δεν βρέθηκαν εντολές παραγωγής.</p>
      )}
    </div>
  );
};

export default ProductionProgramTable;
