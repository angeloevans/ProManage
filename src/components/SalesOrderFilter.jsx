import React, { useCallback, useEffect } from "react";

const SalesOrderFilter = ({ salesData, updateFilteredSalesData, userData }) => {
  const filterSalesData = useCallback(() => {
    console.log("🔍 Checking userData:", userData);
    console.log("📊 Received Sales Data:", salesData);

    if (!Array.isArray(salesData) || salesData.length === 0) {
      console.warn("⚠️ Sales data is empty or not an array.");
      return;
    }

    // Admin should see all sales orders
    if (userData?.role === "admin" || userData?.USERID?.toString() === "admin") {
      console.log("🟢 Admin detected: Showing all sales data.");
      updateFilteredSalesData([...salesData]);
      return;
    }

    // Standard users only see their sales orders
    const loggedInUserID = userData?.USERID?.toString();
    if (!loggedInUserID) {
      console.warn("⚠️ Invalid USERID:", loggedInUserID);
      updateFilteredSalesData(salesData); // Show all if USERID is missing
      return;
    }

    const filtered = salesData.filter((sale) => sale.USERID?.toString() === loggedInUserID);
    console.log(`🔍 Filtered sales for USERID (${loggedInUserID}):`, filtered);
    updateFilteredSalesData(filtered);
  }, [salesData, userData, updateFilteredSalesData]);

  useEffect(() => {
    if (Array.isArray(salesData) && salesData.length > 0) {
      filterSalesData();
    }
  }, [salesData, filterSalesData]);

  return (
    <div>
      <label>User Filter:</label>
      <input
        type="text"
        value={userData ? userData.username : ""}
        disabled
        className="border p-2"
        placeholder="Logged In User"
      />
    </div>
  );
};

export default SalesOrderFilter;