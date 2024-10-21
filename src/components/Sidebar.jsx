import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaRoute, FaUsers, FaCog, FaBars } from 'react-icons/fa';
import './styles/layout/_sidebar.css';

// Imágenes de banderas
import flagES from "../assets/img/es-flag.jpg";
import flagEN from "../assets/img/en-flag.jpg";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [language, setLanguage] = useState('es'); // Idioma por defecto

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    // Aquí podrías agregar lógica para cambiar el idioma real en tu aplicación
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Botón de colapsar/expandir */}
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </div>

      <nav className="sidebar-nav">
        {/* Enlaces de navegación */}
        <NavLink exact to="/dashboard" activeClassName="active" className="sidebar-link">
          <FaHome className="sidebar-icon" />
          <span className="sidebar-text">Inicio</span>
        </NavLink>

        <NavLink to="/routes" activeClassName="active" className="sidebar-link">
          <FaRoute className="sidebar-icon" />
          <span className="sidebar-text">Rutas</span>
        </NavLink>

        <NavLink to="/users" activeClassName="active" className="sidebar-link">
          <FaUsers className="sidebar-icon" />
          <span className="sidebar-text">Usuarios</span>
        </NavLink>

        <NavLink to="/settings" activeClassName="active" className="sidebar-link">
          <FaCog className="sidebar-icon" />
          <span className="sidebar-text">Configuración</span>
        </NavLink>

        {/* Botón de cambio de idioma */}
        <div className="language-switcher">
          <img 
            src={flagES} 
            alt="Español" 
            className="flag" 
            onClick={() => handleLanguageChange('es')} 
          />
          <img 
            src={flagEN} 
            alt="English" 
            className="flag" 
            onClick={() => handleLanguageChange('en')} 
          />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;