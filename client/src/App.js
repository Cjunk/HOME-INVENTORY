import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './Components/login.js'; // Adjust the path if necessary
import NavigationBar from './Components/heading.js'
import TestPage from './Components/testpage.js';
import RegisterForm from './Components/register.js'
import './App.css';
function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [currentPage, setcurrentPage] = useState(1)
  const setTheCurrentPage =(page) => {
    setcurrentPage(page)
  }
  // useEffect to check authentication state on component mount
  useEffect(() => {
    // You can implement logic here to check the user's authentication status.
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setLoggedIn(isLoggedIn);
  }, []);
  const handleLogin = (val) => {
    setLoggedIn(val)
  }
  const handleLogout = (val) => {
    setLoggedIn(val)
  }
  return ( 
    <div className="App">
      <NavigationBar isLoggedIn={loggedIn} pageSelector={setTheCurrentPage} />
            {/* Rest of your app component */}
      <Router>
        <Routes>
          <Route path="/" element={loggedIn ? (<Navigate to="/homepage" replace />) : currentPage === 1?(<LoginForm  setLogin={handleLogin} />):(<RegisterForm/>)}>
          </Route>
          <Route path="/homepage" element={!loggedIn ? (<Navigate to="/" replace />) : (<TestPage setLogout={handleLogout} />)}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;