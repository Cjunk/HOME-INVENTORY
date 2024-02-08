// This is the Navigation Bar
// eslint-disable-next-line
import React from 'react'
import { logout } from '../services/authService';
import './styles/heading.css';
function NavigationBar(props) {
  const thelogout = () => {
    logout().then(() => {
      // Handle successful logout, e.g., updating state, redirecting
      props.handleLogout()
      props.pageSelector(1)
    }).catch((error) => {
      console.error("Logout failed", error);
      // Handle logout error
    });
  };
  return (
    <div>
      <nav className="navigation-header">
          <div className="navigation-buttons">
            <ul>
              {props.isLoggedIn ? (
                <>
                  <li><button>Add Item</button></li>
                  <li><button>Delete Item</button></li>
                  <li><button>Add Location</button></li>
                  <li><button>Edit Location</button></li>
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
    </div>
  );
}
export default NavigationBar;