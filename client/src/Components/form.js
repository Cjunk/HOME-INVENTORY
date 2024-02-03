import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/form.css';

function UserForm({ formType, handleSubmit, handleAlertButtonClick }) {
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
    const handlePasswordKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit(event); // Call the handleSubmit function when Enter is pressed
        }
    };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>

          <h2 className="">{formType===1 ? "LOGIN" : "REGISTER"}</h2>
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
            <button type="submit" className="btn btn-primary">
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