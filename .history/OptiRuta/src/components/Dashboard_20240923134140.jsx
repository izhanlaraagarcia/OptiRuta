import React from 'react';
import Sidebar from './Sidebar';

import '../styles/_dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <p>Resumen de rutas y datos importantes...</p>
      </div>
    </div>
  );
}

export default Dashboard;
