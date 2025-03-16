# React Web App - Role-Based Dashboard

This **React Web App** is a role-based dashboard system that provides access to different sections based on user roles. It dynamically manages and displays production and sales data to users based on their department (Production, Sales, Admin). The app is designed with user authentication and navigation tailored to the user’s role.

## Features

- **🔑 User Authentication**: 
  - The system validates users with a login form and manages sessions using `localStorage`.
  
- **📌 Role-Based Navigation**: 
  - Users in different departments (e.g., **Production**, **Sales**, **Admin**) see different menu options.
  
- **📊 Auto-Generated Tables**: 
  - Sales orders and production programs are displayed dynamically in structured grids.
  
- **🔍 Data Filtering**: 
  - Sales orders are filtered based on the `USERID`, allowing admins to see all data while normal users can only view their assigned tasks.
  
- **⚛️ React Hooks**: 
  - The app uses `useState` for managing state, `useEffect` for loading data, and `useCallback` for optimizing filters.

- **⚙️ Production Control**: 
  - The production management section includes features like Start, Pause, Continue, and Stop production.
  - Navigation to a **Production Details Page** is available from the **Production Management** section.
  
- **📁 Data Storage**: 
  - For demonstration purposes, all data is stored in a local **JSON** file, simulating the behavior of an actual backend API.

Login:

        "username"      : "admin",
        "password"      : "admin",
        "department"    : "admin",
        "USERID"        : "admin"

        "username"      : "sales1",
        "password"      : "sales1",
        "department"    : "sales",
        "USERID"        : 1

        "username"      : "sales2",
        "password"      : "sales2",
        "department"    : "sales",
        "USERID"        : 2

        "username"      : "production",
        "password"      : "production",
        "department"    : "production",
        "USERID"        : 3


## Installation

To get started with this app, follow these steps:

1. Clone the repository:
  git clone https://github.com/angeloevans/ProManage.git

2. Navigate to the project directory: 
  cd path/to/your/project

3. Install the dependencies:
  npm install

## Technologies used:
React: A JavaScript library for building user interfaces.
React Router: For routing and navigation between pages.
Tailwind CSS: A utility-first CSS framework for designing modern UIs.
React Hooks: useState, useEffect, useCallback for managing state and optimizing performance.
LocalStorage: Used to simulate user session management.
Demo
All data is loaded from local JSON files for demonstration purposes.
The app is designed to show how the Production Management system works, allowing users to start, pause, continue, and stop production processes.
License
This project is licensed under the MIT License.
Feel free to adjust any parts as per your project’s needs. Let me know if you'd like any further adjustments! 😊

