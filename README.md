# React Web App - Role-Based Dashboard

## ProManage is a powerful React-based Role-Based Dashboard designed to manage production and sales workflows efficiently. With dynamic role-based navigation, seamless authentication, and real-time data visualization, it ensures that each department accesses only the relevant information.

## 🚀 Features

### 🔑 User Authentication & Session Management
- Users log in via a **secure login form**, with session handling via `localStorage`.

### 📌 Role-Based Navigation
- **Dynamic menus** based on user roles:
  - **Production Users**: Manage production processes.
  - **Sales Users**: View sales data filtered by their `USERID`.
  - **Admins**: Access all sections and data.

### 📊 Auto-Generated Data Tables
- **Sales orders and production programs** are dynamically displayed in structured grids.

### 🔍 Data Filtering
- Sales orders are filtered based on `USERID`:
  - **Admins**: View all data.
  - **Sales Users**: Only see their assigned orders.

### ⚙️ Production Management System
- Includes **Start, Pause, Continue, and Stop** controls for production processes.
- Users can navigate to a **Production Details Page** for in-depth tracking.

### ⚛️ Optimized React Hooks Usage
- Utilizes **`useState`** (state management), **`useEffect`** (data loading), and **`useCallback`** (performance optimization).

### 📁 Data Storage & Backend Simulation
- Uses a **local JSON file** to simulate an actual backend API.

## 🛠️ Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/angeloevans/ProManage.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd path/to/your/project
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

## 👤 Default User Credentials

| Username   | Password   | Department  | USERID  |
|------------|------------|------------|------------|
| `admin`      | `admin`      | `admin`        | `admin`   |
| `sales1`     | `sales1`     | `sales`        | `1`       |
| `sales2`     | `sales2`     | `sales`        | `2`       |
| `production` | `production` | `production`   | `3`       |

## 🛠️ Technologies Used

- **React** – JavaScript library for building user interfaces.
- **React Router** – Manages routing and navigation.
- **Tailwind CSS** – Utility-first CSS framework for modern UI design.
- **React Hooks** – (`useState`, `useEffect`, `useCallback`) for state management and performance optimization.
- **LocalStorage** – Used for user session handling.

## 📌 Demo

- All data is **loaded from local JSON files** for demonstration purposes.
- The app showcases **Production Management functionality**, allowing users to **start, pause, continue, and stop** production processes.

## 📜 License

This project is licensed under the **MIT License**.
