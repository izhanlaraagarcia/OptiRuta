import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import RouteManagement from './components/RouteManagement';
import UserSettings from './components/UserSettings';
import Mapa from './components/view/Mapa';

import { LanguageProvider } from './api/LanguageProvider';
import LanguageToggleButton from './components/layouts/Langueje';

function App() {
  return (
    <LanguageProvider>
    <Router>
    <LanguageToggleButton/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/routes" element={<RouteManagement />} />
          <Route path="/settings" element={<UserSettings />} />
          <Route path="/mapa" element={<Mapa/>}/>
        </Routes>
      </div>
    </Router>
    </LanguageProvider>
  );
}

export default App;