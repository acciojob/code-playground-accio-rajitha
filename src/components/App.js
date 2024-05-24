// src/App.js
// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import Playground from './Playground';


const App = () => {
  const [isAuthenticated, setAuth] = useState(false);

  const handleLogin = () => {
    setAuth(true);
  };

  const handleLogout = () => {
    setAuth(false);
  };

  return (
    <Router>
      <div className="main-container">
        <p>{isAuthenticated ? 'Logged in, Now you can enter Code Playground' : 'You are not authenticated, Please login first'}</p>
        <nav>
          <ul>
            <li>
              <Link to="/playground">Playground</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={
            <LoginPage 
              isAuthenticated={isAuthenticated} 
              handleLogin={handleLogin} 
              handleLogout={handleLogout} 
            />} 
          />
          <Route path="/playground" element={
            isAuthenticated ? <Playground /> : <Navigate to="/not-found" replace />
          } />
          <Route path="/not-found" element={<div>Page not Found</div>} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
