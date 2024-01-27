import React, { useState,useEffect } from 'react';
import './styles/login.css';
import axios from 'axios'; // Import Axios
// public ip http://112.141.11.237/
function LoginForm({ setLogin }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
        document.title = "Login";
    }, [])
    const handleSubmit = async (event) => {
        event.preventDefault();

        const payload = {
            username: username,
            password: password,
        };
        try {
            const response = await axios.post(`${process.env.REACT_APP_EXPRESS_SERVER_URL}/login`, payload, {
                withCredentials: true, // Include cookies in the request
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                console.log('Login response:', response.data);
                localStorage.setItem('isLoggedIn', 'true');
                setLogin(true);
                //  TODO:  implement get POST login info from the server. must get from /test
            } else {
                console.error('Failed to login:', response);
            }
        } catch (error) {
            setErrorMessage(error.message);
            console.error('Failed to login:', error);
            // Handle errors here, like showing a notification to the user
        }
    };
    const handleAlertButtonClick = () => {
        window.open('https://www.cnn.com', '_blank');
    };
    const handlePasswordKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit(event); // Call the handleSubmit function when Enter is pressed
        }
    };
    return (
        <div>
            {errorMessage && <div>Error: {errorMessage}</div>}
            <form onSubmit={handleSubmit} className="form" method="Post">
                <div>
                    <h2>laptop server</h2>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={handlePasswordKeyDown}
                    />
                </div>
                <div>
                    <button type="submit" className="input">
                        Login
                    </button>
                    <button type="button" className="input" onClick={handleSubmit} onPointerEnter={handleSubmit}>
                        Login
                    </button>
                    <button type="button" className="input" onClick={handleSubmit} onTouchStart={handleAlertButtonClick}>
                        Alert Button
                    </button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
