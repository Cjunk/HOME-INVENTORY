import React, { useState } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// eslint-disable-next-line
import LoginForm from './Components/login.js'; // Adjust the path if necessary
import './App.css';

function App() {
  // eslint-disable-next-line
  const [username, setUsername] = useState('');
  // eslint-disable-next-line
  const [password, setPassword] = useState('');

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

      // Handle the response data as needed...
    } catch (error) {
      console.error('Failed to login:', error);
      // Handle errors here, like showing a notification to the user
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Login</h1>
        <LoginForm onLogin={handleLogin} />
      </header>
    </div>
  );
}

export default App;
