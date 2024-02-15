/*
    For API calls

*/
import axios from 'axios'; // Import Axios
const API_BASE_URL = process.env.REACT_APP_EXPRESS_SERVER_URL
// Logout function
export const logout = () => {
    return axios.post(`${API_BASE_URL}/logout`, {}, { withCredentials: true });
};