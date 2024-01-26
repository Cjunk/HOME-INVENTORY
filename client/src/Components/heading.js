// This is the main heading for the Home Harmony website and 
// eslint-disable-next-line
import React, { useState, useEffect } from 'react'
import './styles/heading.css';
function NavigationBar(props) {
  return (
        <nav className="navigation-header">
      <ul>
        {props.isLoggedIn ? (
          <>
          <li><button>Add Item</button></li>,
          <li><button>Delete Item</button></li>,
            <li><button>Settings</button></li>
            </>
        ):(
            <li><button >Login</button></li>
            
        )}   
            </ul>
        </nav>
    );
  
}

export default NavigationBar;