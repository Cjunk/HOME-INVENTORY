/*
  This is the the Form controller

  This will decide which form to display to the end user
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/form.css';
/*
  'formType' indicates where it is a Login Form or Register new user form
  'setLogin' is the variable 
*/
function UserForm({ formType, setLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (formType === 1) {
      document.title = "Login";
    } else {
      document.title = "Register";
    }

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
      console.log(username)
      const payload = {
        username: username,
        password: password
      }
      handleSubmit(event, payload); // Call the handleSubmit function when Enter is pressed
    }
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>

          <div className="">
            <label htmlFor="username" className="formlabel">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="inputFields"
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
          <div className="buttonLayout">
            <button type="submit" className="btn btn-primary" >
              Login
            </button>
            <button type="button" className="btn btn-danger" onClick={handleAlertButtonClick} onTouchStart={handleAlertButtonClick}>
              Alert
            </button>
          </div>
        </div>
      </form>
    </div>)
}
export default UserForm