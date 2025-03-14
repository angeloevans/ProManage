import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">      
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Welcome to the <strong>React Web App</strong>
        </h2>
        <p className="text-lg text-gray-700"> 
          You have successfully logged in!
        </p>

        <div className="mt-6 text-gray-700">
          <p>
            This <strong>React Web App</strong> is a <strong>role-based dashboard system</strong> that provides access to different sections based on user roles.
          </p>
          <p className="mt-3">
            <strong>🔑 User Authentication:</strong> The system validates users with a login form and manages sessions using <code>localStorage</code>.
          </p>
          <p className="mt-3">
            <strong>📌 Role-Based Navigation:</strong> Users in different departments (e.g., <em>Production, Sales, Admin</em>) see different menu options.
          </p>
          <p className="mt-3">
            <strong>📊 Auto-Generated Tables:</strong> Sales orders and production programs are displayed dynamically in structured grids.
          </p>
          <p className="mt-3">
            <strong>🔍 Data Filtering:</strong> The sales orders are filtered based on <code>USERID</code>, allowing admins to see all data while normal users see their assigned tasks.
          </p>          
          <p className="mt-3">
            <strong>⚙️ Production Management:</strong> 
            For users in the <strong>Production Department</strong>, the app provides real-time control over the production process. This includes the ability to <strong>start</strong>, <strong>pause</strong>, <strong>continue</strong>, and <strong>stop</strong> production tasks. 
            These controls are available on the <strong>Production Details Page</strong>, which can be accessed from the <strong>Production Management</strong> section.
          </p>
          <p className="mt-3">
            <strong>📂 Demo Data:</strong> 
            For demo purposes, all data used in this app (such as sales orders and production programs) is stored in a local <code>JSON</code> file. This allows you to simulate real-time actions and view dynamic content without needing a backend database.
          </p>          
          <p className="mt-3">
            <strong>⚛️ React Hooks Used:</strong> 
            The app uses <code>useState</code> for managing state, <code>useEffect</code> for loading data, and <code>useCallback</code> for optimizing filters.
          </p>
          <p className="mt-3">
            This application ensures an efficient and user-friendly experience by dynamically rendering content based on user roles! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
