import React, { useState } from 'react';

function RouteManagement() {
  const [routes, setRoutes] = useState([]);

  return (
    <div className="routes-container">
      <h1>Gestión de Rutas</h1>
      <div className="routes-list">
        {routes.length > 0 ? (
          routes.map(route => <div key={route.id}>{route.name}</div>)
        ) : (
          <p>No hay rutas disponibles</p>
        )}
      </div>
    </div>
  );
}

export default RouteManagement;
