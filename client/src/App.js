import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './Components/login.js'; // Adjust the path if necessary
import TestPage from './Components/testpage.js'
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  // useEffect to check authentication state on component mount
  useEffect(() => {
    // You can implement logic here to check the user's authentication status.
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setLoggedIn(isLoggedIn);
  }, []);
  const handleLogin =(val) => {
    setLoggedIn(val)
  }
  const handleLogout = (val) => {
    setLoggedIn(val)
  }
  console.log('loggedIn:', loggedIn);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={loggedIn ? (<Navigate to="/test" replace />) : (<LoginForm setLogin={handleLogin} />)}>
          </Route>
          <Route path="/test" element={!loggedIn ? (<Navigate to="/" replace />) : (<TestPage setLogout={handleLogout} />)}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
