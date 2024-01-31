import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios

function LogoutComponent({ onLogout }) {
  console.log("am here")
  const navigate = useNavigate();
  onLogout(false)
  useEffect(() => {
    // Send a request to the server to log the user out
    axios
      .post('/logout', null, {
        withCredentials: true,
      }) // Replace with the appropriate server endpoint for logout
      .then((response) => {
        // Handle successful logout (e.g., clear local storage, reset user state)
        // ...
        console.log("logout.js"), response
        
        // Redirect to the login page
        navigate('/');
      })
      .catch((error) => {
        console.error('Logout failed:', error);
        // Handle logout error, if needed
        // ...

        // Redirect to the login page
        navigate('/');
      });
  }, [navigate, onLogout]);

  return null; // You can return null since this component is just for redirection
}

export default LogoutComponent;

