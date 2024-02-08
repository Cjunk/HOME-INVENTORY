import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './Page_components/login.js'; // Adjust the path if necessary
import NavigationBar from './Components/navigationBar.js'
import TestPage from './Page_components/testpage.js';
import RegisterForm from './Page_components/register.js'
import HomePage from './Page_components/home.js'
import Header from './Components/Header.js';
import './App.css';
function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [currentPage, setcurrentPage] = useState(1)
  const setTheCurrentPage = (page) => {
    setcurrentPage(page)
  }
  // useEffect to check authentication state on component mount
  useEffect(() => {
    // You can implement logic here to check the user's authentication status.
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setLoggedIn(isLoggedIn);
  }, []);
  const handleLogin = () => {
    setLoggedIn(true)
  }
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setLoggedIn(false)
  }
  return (
    <div className="App">
      <Header isLoggedIn={loggedIn} pageSelector={setTheCurrentPage} handleLogout={handleLogout} />
      <Router>
        <Routes>
          <Route path="/" element={loggedIn ? (<Navigate to="/homepage" replace />) : currentPage === 1 ? (<HomePage />) : currentPage === 2 ? (<LoginForm setLogin={handleLogin} />) : (<RegisterForm />)}>
          </Route>
          <Route path="/homepage" element={!loggedIn ? (<Navigate to="/" replace />) : (<TestPage handleLogout={handleLogout} />)}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;