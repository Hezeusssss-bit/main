import { useState } from "react";
import "./App.css";

function App() {
  // Active menu state
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  // Employee attendance data
  const employees = [
    { name: "Sya ni", timeIn: "09:00 AM", timeOut: "05:00 PM" },
    { name: "Ikaw ni", timeIn: "09:30 AM", timeOut: "05:30 PM" },
    { name: "Ari Iya", timeIn: "08:45 AM", timeOut: "04:45 PM" },
    { name: "Indi in Ikaw", timeIn: "09:15 AM", timeOut: "05:15 PM" },
  ];

  const menuItems = ["Dashboard", "Manage Users", "Products", "Reports", "Settings"];

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Admin</h2>
        <ul className="menu">
          {menuItems.map((item) => (
            <li
              key={item}
              className={activeMenu === item ? "active" : ""}
              onClick={() => setActiveMenu(item)}
            >
              {item === "Dashboard" ? "🏠 " + item :
               item === "Manage Users" ? "👥 " + item :
               item === "Products" ? "📦 " + item :
               item === "Reports" ? "📊 " + item :
               "⚙️ " + item}
            </li>
          ))}
        </ul>
        <button className="logout">🚪 Logout</button>
      </aside>

      {/* Main Content */}
      <main className="main">
        <header className="header">
          <h1>{activeMenu}</h1>
          <div className="header-right">
            <input type="text" placeholder="Search..." className="search" />
          </div>
        </header>

        {/* Dashboard Cards */}
        <section className="content">
          <div className="card">📈 Sales: $12,345</div>
          <div className="card">👥 Users: 1,245</div>
          <div className="card">⭐ Reviews: 85</div>
        </section>

        {/* Employee Attendance Table */}
        <section className="attendance">
          <h2>Users Attendance</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Time In</th>
                <th>Time Out</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, index) => (
                <tr key={index}>
                  <td>{emp.name}</td>
                  <td>{emp.timeIn}</td>
                  <td>{emp.timeOut}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default App;
