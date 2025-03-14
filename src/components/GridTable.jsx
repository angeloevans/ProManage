// Grid Table Component that generates a Grid Table with the input of headers & rows
import React from "react";

const GridTable = ({ headers, rows }) => {
  return (
    <div className="table-container overflow-x-auto">
         <div className="overflow-x-auto max-h-[400px]"> 
            <table className="custom-table min-w-full table-auto bg-white border border-gray-200 shadow-md">
                <thead className="bg-gray-700 text-white text-xs sticky top-0 z-10">
                <tr>
                    {headers.map((header, index) => (
                    <th key={index} className="px-3 py-2 text-left font-light">{header}</th>
                    ))}
                </tr>
                </thead>
                <tbody className="bg-gray-50 divide-y divide-gray-200 text-xs">
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-b hover:bg-gray-50">
                    {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-4 py-2 border-b">{cell}</td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
      </div>
    </div>
  );
};

export default GridTable;