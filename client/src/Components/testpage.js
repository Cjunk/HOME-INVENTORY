import React from 'react';
import './styles/login.css';
import axios from 'axios';
const serverIP = '192.168.1.23'; // Replace with your server's IP address
function TestPage({ setLogout }) {
  const handleLogout = async () => {
    try {
      console.log("Cookies before Axios request:", document.cookie);
      const response = await axios.post(`/logout`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'sessionID': 'sessionID' + encodeURIComponent(document.cookie)
        },
      });
      console.log("ATTEMPTING IT", response);
      if (response.status === 200) {
        localStorage.removeItem('isLoggedIn');
        setLogout(false);
      } else {
        console.error('Failed to logout:', response);
      }
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <div>
      <h2>Your inventory 3</h2>
      <h1> J J</h1>
      <button onClick={handleLogout} className="input" id="logoutBut">
        Logout
      </button>
    </div>
  );
}

export default TestPage;
