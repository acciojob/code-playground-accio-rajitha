// src/LoginPage.js
// src/LoginPage.js
import React from 'react';

const LoginPage = ({ isAuthenticated, handleLogin, handleLogout }) => {
  return (
    <div className="main-container">
      <p>Login</p>
      {!isAuthenticated ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <>
          
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default LoginPage;
