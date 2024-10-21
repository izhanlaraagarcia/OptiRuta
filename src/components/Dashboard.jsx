import React from 'react';
import './styles/pages/_dashboard.css';
import Sidebar from './Sidebar';

const DashboardCard = ({ title, content, stats }) => (
  <div className="dashboard-card">
    <h2>{title}</h2>
    <p>{content}</p>
    <div className="dashboard-stats">
      {stats.map((stat, index) => (
        <div key={index} className="dashboard-stat">
          <i className={stat.icon}></i>
          <p>{stat.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const Dashboard = () => {
  const cardsData = [
    {
      title: "Rutas activas",
      content: "Total de rutas: 12",
      stats: [
        { icon: "fas fa-route", description: "5 rutas hoy" },
        { icon: "fas fa-calendar-alt", description: "Semana activa" }
      ]
    },
    {
      title: "Usuarios conectados",
      content: "Usuarios activos: 45",
      stats: [
        { icon: "fas fa-user", description: "15 nuevos hoy" },
        { icon: "fas fa-user-check", description: "Usuarios recurrentes" }
      ]
    },
    {
      title: "Estadísticas de rendimiento",
      content: "Tiempo medio de entrega: 45 min",
      stats: [
        { icon: "fas fa-clock", description: "5% más rápido hoy" },
        { icon: "fas fa-chart-line", description: "Progreso continuo" }
      ]
    },
    {
      title: "Feedback de los usuarios",
      content: "Últimos comentarios recibidos",
      stats: [
        { icon: "fas fa-comments", description: "12 nuevas opiniones" },
        { icon: "fas fa-smile", description: "90% de satisfacción" }
      ]
    }
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <header className="dashboard-header">
          <h1>Bienvenido al Dashboard</h1>
          <button>Crear nueva ruta</button>
        </header>

        <section className="dashboard-grid">
          {cardsData.map((card, index) => (
            <DashboardCard 
              key={index}
              title={card.title}
              content={card.content}
              stats={card.stats}
            />
          ))}
        </section>
      </div>
      <Sidebar />
    </div>
  );
};

export default Dashboard;