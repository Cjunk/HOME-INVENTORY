import React, { useState } from 'react';
import './styles/login.css';
import axios from 'axios'; // Import Axios

function LoginForm({ setLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const payload = {
            username: username,
            password: password,
        };
        try {
            const response = await axios.post('https://localhost:3001/login', payload, {
                withCredentials: true, // Include cookies in the request
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                const responseData = response.data;
                console.log('Login response:', responseData);
                localStorage.setItem('isLoggedIn', 'true');
                setLogin(true);
            } else {
                console.error('Failed to login:', response);
            }
        } catch (error) {
            console.error('Failed to login:', error);
            // Handle errors here, like showing a notification to the user
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="form" method="Post">
                <div>
                    <h2>Login1</h2>
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
                    />
                </div>
                <button type="submit" className="input">
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginForm;
