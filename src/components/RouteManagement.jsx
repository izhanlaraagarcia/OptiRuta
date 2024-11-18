import React, { useState } from 'react';
import './styles/pages/_routeManagement.css'; // Nuevo archivo CSS
import Sidebar from './Sidebar';
import Mapa from './view/Mapa';

const RouteManagementCard = ({ name, description, status }) => (
  <div className="dashboard-card">
    <h2>{name}</h2>
    <p>{description}</p>
    <div className="dashboard-stats">
      <div className="dashboard-stat">
        <i className="fas fa-map-marked-alt"></i>
        <p>{status}</p>
      </div>
    </div>
  </div>
);

const RouteManagement = () => {
  const [routes, setRoutes] = useState([
    { id: 1, name: 'Ruta 1', description: 'Ruta principal de la ciudad', status: 'Activa' },
    { id: 2, name: 'Ruta 2', description: 'Ruta hacia la zona industrial', status: 'En revisión' },
    { id: 3, name: 'Ruta 3', description: 'Ruta hacia el aeropuerto', status: 'Activa' }
  ]);

  const addNewRoute = () => {
    const newRoute = {
      id: routes.length + 1,
      name: `Ruta ${routes.length + 1}`,
      description: 'Nueva ruta creada',
      status: 'Activa'
    };
    setRoutes([...routes, newRoute]);
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <header className="dashboard-header">
          <h1>Gestión de Rutas</h1>
          <button onClick={addNewRoute}>Crear nueva ruta</button>
        </header>

        <section className="dashboard-grid">
          {routes.length > 0 ? (
            routes.map(route => (
              <RouteManagementCard
                key={route.id}
                name={route.name}
                description={route.description}
                status={route.status}
              />
            ))
          ) : (
            <p>No hay rutas disponibles</p>
          )}
        </section>
      </div>
      <Mapa />
    </div>
  );
};

export default RouteManagement;
