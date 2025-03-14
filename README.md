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

## Installation

To get started with this app, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/angeloevans/ProManage.git

Navigate to the project directory:

bash
Αντιγραφή
Επεξεργασία
cd your-repository-name
Install the dependencies:

bash
Αντιγραφή
Επεξεργασία
npm install
Run the development server:

