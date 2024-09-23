import React from 'react';
import './styles/pages/_dashboard.css'; // Asegúrate de que los estilos están correctamente enlazados
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Contenido del Dashboard */}
      <div className="dashboard-content">
        <header className="dashboard-header">
          <h1>Bienvenido al Dashboard</h1>
          <button>Crear nueva ruta</button>
        </header>

        <section className="dashboard-grid">
          {/* Tarjeta de resumen 1 */}
          <div className="dashboard-card">
            <h2>Rutas activas</h2>
            <p>Total de rutas: 12</p>
            <div className="dashboard-stats">
              <div className="dashboard-stat">
                <i className="fas fa-route"></i>
                <p>5 rutas hoy</p>
              </div>
              <div className="dashboard-stat">
                <i className="fas fa-calendar-alt"></i>
                <p>Semana activa</p>
              </div>
            </div>
          </div>

          {/* Tarjeta de resumen 2 */}
          <div className="dashboard-card">
            <h2>Usuarios conectados</h2>
            <p>Usuarios activos: 45</p>
            <div className="dashboard-stats">
              <div className="dashboard-stat">
                <i className="fas fa-user"></i>
                <p>15 nuevos hoy</p>
              </div>
              <div className="dashboard-stat">
                <i className="fas fa-user-check"></i>
                <p>Usuarios recurrentes</p>
              </div>
            </div>
          </div>

          {/* Tarjeta de resumen 3 */}
          <div className="dashboard-card">
            <h2>Estadísticas de rendimiento</h2>
            <p>Tiempo medio de entrega: 45 min</p>
            <div className="dashboard-stats">
              <div className="dashboard-stat">
                <i className="fas fa-clock"></i>
                <p>5% más rápido hoy</p>
              </div>
              <div className="dashboard-stat">
                <i className="fas fa-chart-line"></i>
                <p>Progreso continuo</p>
              </div>
            </div>
          </div>

          {/* Tarjeta de resumen 4 */}
          <div className="dashboard-card">
            <h2>Feedback de los usuarios</h2>
            <p>Últimos comentarios recibidos</p>
            <div className="dashboard-stats">
              <div className="dashboard-stat">
                <i className="fas fa-comments"></i>
                <p>12 nuevas opiniones</p>
              </div>
              <div className="dashboard-stat">
                <i className="fas fa-smile"></i>
                <p>90% de satisfacción</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Sidebar />
    </div>
  );
};

export default Dashboard;
