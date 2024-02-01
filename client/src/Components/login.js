import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//import './styles/login.css';
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
        alert("I am working")
    };
    const handlePasswordKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit(event); // Call the handleSubmit function when Enter is pressed
        }
    };
    return (
        <div className="container"> {/* Add Bootstrap container class */}
            <div>

                <form onSubmit={handleSubmit}>
                    <div>

                        <h2 className="mb-4">LOGIN</h2>
                        <div className="mb-3">
                            <label htmlFor="username" className="formlabel">Username:</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="form-control"
                            />
                        </div>

                    </div>
                    <div>
                        <label htmlFor="password" className="formlabel">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={handlePasswordKeyDown}
                            className="form-control"
                        />
                    </div>
                    <div>
                        <div className="mb-3">
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                            <button type="button" className="btn btn-danger" onClick={handleAlertButtonClick} onTouchStart={handleAlertButtonClick}>
                            Alert Button
                        </button>
                        </div>
                    </div>
                </form>

                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            </div>
        </div>
    );
}

export default LoginForm;
