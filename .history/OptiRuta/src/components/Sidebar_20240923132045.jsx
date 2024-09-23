import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard">Inicio</Link></li>
        <li><Link to="/routes">Rutas</Link></li>
        <li><Link to="/settings">Ajustes</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
