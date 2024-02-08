// This is the main heading for the Home Harmony website and 
// eslint-disable-next-line
import React, { useState, useEffect } from 'react'
import { logout } from '../services/authService';
import './styles/heading.css';

function NavigationBar(props) {
  const thelogout = () => {
    
    logout().then((response) => {
      // Handle successful logout, e.g., updating state, redirecting
      props.handleLogout()
      props.pageSelector(1)
      console.log("Logged out successfully", response.data.message, 'SetLogout should now be false');
    }).catch((error) => {
      console.error("Logout failed", error);
      // Handle logout error
    });
  };
  return (
    <nav className="navigation-header">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <div className="banner-container">
        <img className="bannerImg" src='/img/Image1.jpg' alt="Describe the content of the image"></img>
      </div>
      <div className="navigation-buttons">
        <ul>
          {props.isLoggedIn ? (
            <>
              <li><button>Add Item</button></li>
              <li><button>Delete Item</button></li>
              <li><button>Settings</button></li>
              <li><button onClick={thelogout}>Logout</button></li>
            </>
          ) : (
            <>
              <li><button onClick={() => props.pageSelector(1)}>Home</button></li>
              <li><button onClick={() => props.pageSelector(2)}>Login</button></li>
              <li><button onClick={() => props.pageSelector(3)}>Register</button></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
export default NavigationBar;