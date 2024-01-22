import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios

function LogoutComponent() {
  const navigate = useNavigate();

  useEffect(() => {
    // Send a request to the server to log the user out
    axios
      .post('/logout') // Replace with the appropriate server endpoint for logout
      .then((response) => {
        // Handle successful logout (e.g., clear local storage, reset user state)
        // ...

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
  }, [navigate]);

  return null; // You can return null since this component is just for redirection
}

export default LogoutComponent;

