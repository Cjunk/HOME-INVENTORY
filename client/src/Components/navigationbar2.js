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
        });
    };
    const menuList = [
        { "id": 1, "name": "Home", "liclassName": "desktopButton", "visible": 1},
        { "id": 2, "name": "Add Item", "liclassName": "desktopButton", "visible": 0 },
        { "id": 3, "name": "Add Location", "liclassName": "desktopButton", "visible": 1 },
        { "id": 4, "name": "Settings", "liclassName": "desktopButton", "visible": 0 },
        { "id": 5, "name": "Home", "liclassName": "desktopButton", "visible": 0 },
        { "id": 6, "name": "Home", "liclassName": "desktopButton", "visible": 0 },
        { "id": 7, "name": "Home", "liclassName": "desktopButton", "visible": 0 },
        { "id": 8, "name": "Logout", "liclassName": "desktopButton", "visible": 1},
        { "id": 9, "name": "Home", "liclassName": "", "visible": 1, "function": false, "buttonClassName": "mobileNavButtons" },
        { "id": 10, "name": "Options", "liclassName": "", "visible": 1, "function": thelogout, "buttonClassName": "mobileNavButtons" },
    ]

    const homeMenu = [
        { "id": 1, "name": "Home", "liclassName": "desktopButton", "visible": 1},
        { "id": 2, "name": "Login", "liclassName": "desktopButton", "visible": 0 },
        { "id": 3, "name": "Register", "liclassName": "desktopButton", "visible": 0  },
    ]
    function exectueMenuItem(id) {

        switch (id) {
            case 2:
                props.pageSelector (2)
                break;
            case 8:
                thelogout()
                break;
            default:
        }
    }
    return (
        <nav className="navigation-container">
            <div className="navigation-buttons2">
                <ul>
                    {props.isLoggedIn ? (
                        <>
                            {menuList.map((item, index) => (
                                item.visible === 1 && (
                                    <li key={index} className={item.liclassName}>
                                        <button className={item.buttonClassName} onClick={() => exectueMenuItem(item.id)}>{item.name}</button>
                                    </li>)
                            ))}

                        </>
                    ) : (
                            <>
                                {homeMenu.map((item, index) => (
                                    item.visible === 1 && (
                                        <li key={index} className={item.liclassName}>
                                            <button className={item.buttonClassName} onClick={() => props.pageSelector(item.id)}>{item.name}</button>
                                        </li>)
                                ))} 

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