import React, { useState } from 'react';
// import './styles/layout/_sidebar.css'; // Asegúrate de que los estilos están correctamente enlazados
import { NavLink } from 'react-router-dom'; // Para manejar rutas activas
import { FaHome, FaRoute, FaUsers, FaCog, FaBars } from 'react-icons/fa'; // Iconos de React Icons

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // Estado para colapsar el menú

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Botón de colapsar/expandir */}
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </div>

      <nav className="sidebar-nav">
        {/* Enlace de Inicio */}
        <NavLink exact to="/dashboard" activeClassName="active" className="sidebar-link">
          <FaHome className="sidebar-icon" />
          <span className="sidebar-text">Inicio</span>
        </NavLink>

        {/* Enlace de Rutas */}
        <NavLink to="/routes" activeClassName="active" className="sidebar-link">
          <FaRoute className="sidebar-icon" />
          <span className="sidebar-text">Rutas</span>
        </NavLink>

        {/* Enlace de Usuarios */}
        <NavLink to="/users" activeClassName="active" className="sidebar-link">
          <FaUsers className="sidebar-icon" />
          <span className="sidebar-text">Usuarios</span>
        </NavLink>

        {/* Enlace de Configuraciones */}
        <NavLink to="/settings" activeClassName="active" className="sidebar-link">
          <FaCog className="sidebar-icon" />
          <span className="sidebar-text">Configuración</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
