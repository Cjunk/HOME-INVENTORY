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
                            <li className="desktopButton"><button>Home</button></li>
                            <li className="desktopButton"><button>Add Item</button></li>
                            <li className="desktopButton"><button>Delete Item</button></li>
                            <li className="desktopButton"><button>Add Location</button></li>
                            <li className="desktopButton"><button>Edit Location</button></li>
                            <li className="desktopButton"><button>Settings</button></li>
                            <li className="desktopButton"><button onClick={thelogout}>Logout</button></li>
                            <li><button className="mobileNavButtons">Home</button></li>
                            <li><button className="mobileNavButtons">Options</button></li>
                        </>
                    ) : (
                        <>
                            <li className="desktopButton"><button id="home" onClick={() => props.pageSelector(1)}>Home</button></li>
                            <li className="desktopButton"><button id="login" onClick={() => props.pageSelector(2)}>Login</button></li>
                            <li className="desktopButton"><button id="register" onClick={() => props.pageSelector(3)}>Register</button></li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}
export default NavigationBar;