import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// eslint-disable-next-line
import LoginForm from './Components/login.js'; // Adjust the path if necessary
import TestPage from './Components/testpage.js'
import LogoutComponent from './Components/logout.js'
import './App.css';

function App() {
  // eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useState(false); // Track user authentication state

  // useEffect to check authentication state on component mount
  useEffect(() => {
    // You can implement logic here to check the user's authentication status.
    // For simplicity, set it to true initially.
    setLoggedIn(true);
  }, []);

  const handleLogin = async (username, password) => {
    //event.preventDefault();

    // Create the request payload
    const payload = {
      username: username,
      password: password
    };

    try {
      // Send a POST request to your server endpoint
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log('Login response:', responseData);
      setLoggedIn(true);
      // Handle the response data as needed...
    } catch (error) {
      console.error('Failed to login:', error);
      // Handle errors here, like showing a notification to the user
    }

  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={loggedIn ? (<Navigate to="/test" replace />) : (<LoginForm onLogin={handleLogin} />)}>
            
            {/* Show login form if not logged in, else redirect to /test */}
            {/*loggedIn ? <Navigate to="/test" /> : <LoginForm onLogin={handleLogin} />*/}
          </Route>
          <Route path="/test" element={!loggedIn ? (<LoginForm onLogin={handleLogin} />) : (<TestPage onLogin={handleLogin} />)}>
            {/* Show TestPage component if logged in, else redirect to /login */}
            {/*loggedIn ? <TestPage /> : <Navigate to="/login" />*/}
          </Route>
          <Route path="/logout" element={<LogoutComponent />} />
          {/* Add other routes as needed */}
          {/*<Navigate from="/" to="/login" />*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
