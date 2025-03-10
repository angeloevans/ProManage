import React, { useState, useEffect, useCallback } from "react";

const ProductionProgramFilters = ({ productionPrograms, updateFilteredPrograms }) => {
  const [selectedLine, setSelectedLine] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDocNum, setSelectedDocNum] = useState("");

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [day, month, year] = dateStr.split(".");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  // Wrap filter function in useCallback to prevent unnecessary re-creations
  const filterPrograms = useCallback(() => {
    const filtered = productionPrograms.filter((program) => {
      const matchesLine = selectedLine ? program.Code === selectedLine : true;
      const matchesDate = selectedDate ? formatDate(program.StartDate) === selectedDate : true;
      const matchesDocNum = selectedDocNum ? program.DocNum.toString().includes(selectedDocNum) : true;
      return matchesLine && matchesDate && matchesDocNum;
    });
    updateFilteredPrograms(filtered);
  }, [selectedLine, selectedDate, selectedDocNum, productionPrograms, updateFilteredPrograms]);

  useEffect(() => {
    filterPrograms();
  }, [filterPrograms]);

  const uniqueLines = [...new Set(productionPrograms.map((program) => program.Code))];

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
      <div className="flex flex-wrap gap-4 items-center">
        
        {/* Date Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Επιλογή Ημ/νίας:</label>
          <input 
            type="date" 
            value={selectedDate} 
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border rounded-md p-2 text-sm w-44 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Line Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Γραμμή:</label>
          <select 
            value={selectedLine} 
            onChange={(e) => setSelectedLine(e.target.value)}
            className="border rounded-md p-2 text-sm w-44 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Επιλογή Γραμμής</option>
            {uniqueLines.map((line) => (
              <option key={line} value={line}>{line}</option>
            ))}
          </select>
        </div>

        {/* Search by Production Order */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Αναζήτηση Εντολής Παραγωγής:</label>
          <input 
            type="text" 
            value={selectedDocNum} 
            onChange={(e) => setSelectedDocNum(e.target.value)}
            placeholder="Εισάγετε Εντολή Παραγωγής"
            className="border rounded-md p-2 text-sm w-56 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductionProgramFilters;
