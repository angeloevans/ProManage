import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ProductionDetails = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const docNum = queryParams.get("docNum");

  const [productionDetails, setProductionDetails] = useState(null);
  const [pauses, setPauses] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [stopTime, setStopTime] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isProductionStopped, setIsProductionStopped] = useState(false);

  useEffect(() => {
    if (docNum) {
      fetchProductionDetails(docNum);
    }
  }, [docNum]);

  const fetchProductionDetails = (docNum) => {
    if (!docNum) return;

    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        const production = data.find((item) => item.DocNum === Number(docNum));
        if (production) {
          setProductionDetails(production);
          setPauses(production.pauses || []);
          setStartTime(production.U_StartProduction);
          setStopTime(production.U_StopProduction);
          setIsProductionStopped(!!production.U_StopProduction);
        } else {
          setProductionDetails(null);
        }
      })
      .catch((error) => console.error("Error fetching production details:", error));
  };

  const formatTime = (date) => (date ? new Date(date).toLocaleString() : "N/A");

  const togglePause = () => {
    if (!startTime || isProductionStopped) return;
    const currentTime = new Date().toISOString();
    setIsPaused(!isPaused);

    setPauses((prev) => [
      ...prev,
      { pauseTime: !isPaused ? currentTime : undefined, resumeTime: isPaused ? currentTime : undefined },
    ]);
  };

  const startProduction = () => {
    if (isProductionStopped || startTime) return;
    const currentTime = new Date().toISOString();
    setStartTime(currentTime);
    setIsProductionStopped(false);
  };

  const stopProduction = () => {
    if (!startTime || isProductionStopped) return;
    const currentTime = new Date().toISOString();
    setStopTime(currentTime);
    setIsProductionStopped(true);
    setIsPaused(false); // Reset pause state when stopping production
  };

  if (!productionDetails) {
    return <div className="text-center text-gray-600 mt-4">Loading or No Data Found...</div>;
  }

  return (
    <div className="mx-auto my-6 p-4 max-w-5xl bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Εντολή Παραγωγής:{" "}
        <span className="text-blue-600">{productionDetails.DocNum || "Loading..."}</span>
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white border-separate border-spacing-0 shadow-md">
          <tbody className="text-sm text-gray-700">
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Ημ/νία Έναρξης</th>
              <td className="px-4 py-2">{formatTime(productionDetails.StartDate)}</td>
              <th className="px-4 py-2 text-left">Γραμμή Παραγωγής</th>
              <td className="px-4 py-2">{productionDetails.Code}</td>
            </tr>
            <tr>
              <th className="px-4 py-2 text-left">Προτεραιότητα</th>
              <td className="px-4 py-2">{productionDetails.Priority}</td>
              <th className="px-4 py-2 text-left">Κατάσταση</th>
              <td className="px-4 py-2">{productionDetails.Status}</td>
            </tr>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Κωδικός Είδους</th>
              <td className="px-4 py-2">{productionDetails.ItemCode}</td>
              <th className="px-4 py-2 text-left">Περιγραφή</th>
              <td className="px-4 py-2">{productionDetails.ItemName}</td>
            </tr>
            <tr>
              <th className="px-4 py-2 text-left">Ποσότητα</th>
              <td className="px-4 py-2">{productionDetails.Qty}</td>
              <th className="px-4 py-2 text-left">Ολοκληρώθηκαν</th>
              <td className="px-4 py-2">{productionDetails.Ολοκληρώθηκαν}</td>
            </tr>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Πελάτης</th>
              <td className="px-4 py-2">{productionDetails.Πελάτης}</td>
              <th className="px-4 py-2 text-left">Παραγγελία Πελάτη</th>
              <td className="px-4 py-2">{productionDetails.Παραγγελία}</td>
            </tr>
            <tr>
              <th className="px-4 py-2 text-left">Σχόλια</th>
              <td className="px-4 py-2" colSpan="3">{productionDetails.Σχόλια}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full table-auto bg-white border-separate border-spacing-0 shadow-md">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Έναρξη Παραγωγής</th>
              <th className="px-4 py-2 text-left">Λήξη Παραγωγής</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-700">
              <td className="px-4 py-2">{formatTime(startTime)}</td> {/* Display start time */}
              <td className="px-4 py-2">{formatTime(stopTime)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {pauses.length > 0 && (
        <div className="overflow-x-auto mt-6">
          <h3 className="text-lg font-semibold">Παύση & Συνέχεια Παραγωγής</h3>
          <table className="min-w-full table-auto bg-white border-separate border-spacing-0 shadow-md">
            <thead className="bg-gray-700 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Παύση Παραγωγής</th>
                <th className="px-4 py-2 text-left">Συνέχεια Παραγωγής</th>
              </tr>
            </thead>
            <tbody>
              {pauses.map((pause, index) => (
                <tr key={index} className="text-gray-700">
                  <td className="px-4 py-2">{formatTime(pause.pauseTime)}</td>
                  <td className="px-4 py-2">{formatTime(pause.resumeTime)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="flex justify-center space-x-4 mt-6">
        <button
          onClick={startProduction}
          className="bg-green-500 text-white px-4 py-2 rounded"
          disabled={isProductionStopped || startTime}
        >
          Έναρξη
        </button>

        <button
          onClick={togglePause}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
          disabled={isProductionStopped || !startTime}
        >
          {isPaused ? "Συνέχεια" : "Παύση"}
        </button>

        <button
          onClick={stopProduction}
          className="bg-red-500 text-white px-4 py-2 rounded"
          disabled={isProductionStopped || !startTime}
        >
          Λήξη
        </button>
      </div>
    </div>
  );
};

export default ProductionDetails;
