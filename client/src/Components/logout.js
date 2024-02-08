import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';
function LogoutComponent({ props }) {
  const navigate = useNavigate();

  useEffect(() => {
    logout()
      .then((response) => {
        console.log("Logout successful", response);
        props.setLogout(false); // Update logout state
        navigate('/'); // Redirect to the login page
      })
      .catch((error) => {
        console.error('Logout failed:', error);
        navigate('/'); // Redirect to the login page even if logout fails
      });
  }, [navigate, props.setLogout]);

  return null; // Component only handles redirection
}
export default LogoutComponent;