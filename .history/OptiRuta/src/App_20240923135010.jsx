import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import RouteManagement from './components/RouteManagement';
import UserSettings from './components/UserSettings';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/routes" element={<RouteManagement />} />
          <Route path="/settings" element={<UserSettings />} />
        </Routes>
      </div>
      <Sidebar/>

    </Router>

  );
}

export default App;