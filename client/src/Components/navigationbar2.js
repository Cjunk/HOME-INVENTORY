// This is the Navigation Bar
// eslint-disable-next-line
import React from 'react'
import { logout } from '../services/authService';
import './styles/navigationbar2.css';
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
        <nav className="navigation-container">
            <div className="navigation-buttons2">
                <ul>
                    {props.isLoggedIn ? (
                        <>
                            <li ><button>Home</button></li>
                            <li ><button>Add Item</button></li>
                            <li><button>Delete Item</button></li>
                            <li><button>Add Location</button></li>
                            <li><button>Edit Location</button></li>
                            <li><button>Settings</button></li>
                            <li><button onClick={thelogout}>Logout</button></li>
                        </>
                    ) : (
                        <>
                            <li><button id="home" onClick={() => props.pageSelector(1)}>Home</button></li>
                            <li><button id="login" onClick={() => props.pageSelector(2)}>Login</button></li>
                            <li><button id="register" onClick={() => props.pageSelector(3)}>Register</button></li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}
export default NavigationBar;