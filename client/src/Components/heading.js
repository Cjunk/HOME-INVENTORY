// This is the main heading for the Home Harmony website and 
// eslint-disable-next-line
import React, { useState, useEffect } from 'react'
import './styles/heading.css';

function NavigationBar(props) {
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
          </>
        ) : (
          <>
            <li><button onClick={() => props.pageSelector(1)}>Login</button></li>
            <li><button onClick={() => props.pageSelector(2)}>Register</button></li>
          </>

        )}
        </ul>
      </div>
    </nav>
  );

}

export default NavigationBar;