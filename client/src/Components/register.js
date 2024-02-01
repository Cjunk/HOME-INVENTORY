import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/login.css';
import axios from 'axios'; // Import Axios
function RegisterForm({ setLogin }) {
  const [firstname, setFirstname] = useState('');
  const [email, setemail] = useState('');
  const [pswd, setpswd] = useState('');
  const [Cpswd, setCpswd] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    document.title = "Register";
  }, [])
  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      firstname: firstname,
      email: email,
      pswd: pswd,
      Cpswd:Cpswd
    };
    try {
      const response = await axios.post(`${process.env.REACT_APP_EXPRESS_SERVER_URL}/register`, payload, {
        //withCredentials: true, // Include cookies in the request
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        console.log('Register response:', response.data);
        //  TODO:  implement get POST login info from the server. must get from /test
      } else {
        console.error('Failed to register:', response);
      }
    } catch (error) {
      setErrorMessage(error.message);
      console.error('Failed to register:', error);
      // Handle errors here, like showing a notification to the user
    }
  };
  const handleAlertButtonClick = () => {
    alert("Complete the cancel options")
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

            <h2 className="mb-4">REGISTER</h2>
            <div className="mb-3">
              <label htmlFor="firstname" className="formlabel">Firstname:</label>
              <input
                type="text"
                id="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="form-control"
              />
            </div>

          </div>
          <div>
            <label htmlFor="email" className="formlabel">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              onKeyDown={handlePasswordKeyDown}
              className="form-control"
            />
          </div>
            <div>
            <label htmlFor="pswd" className="formlabel">Password:</label>
            <input
              type="password"
              id="pswd"
              value={pswd}
              onChange={(e) => setpswd(e.target.value)}
              onKeyDown={handlePasswordKeyDown}
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="Cpswd" className="formlabel">Confirm password:</label>
            <input
              type="password"
              id="Cpswd"
              value={Cpswd}
              onChange={(e) => setCpswd(e.target.value)}
              onKeyDown={handlePasswordKeyDown}
              className="form-control"
            />
          </div>
          <div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <button type="button" className="btn btn-danger" onClick={handleAlertButtonClick} onTouchStart={handleAlertButtonClick}>
                Cancel
              </button>
            </div>
          </div>
        </form>

        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      </div>
    </div>
  );
}
export default RegisterForm;