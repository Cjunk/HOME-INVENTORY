import React, { useState,useEffect } from 'react';
//import './styles/login.css';
import './styles/testpage.css'
import axios from 'axios';

import ShowInventory from './showInventory';


function YourInventory({ setLogout }) {
  const [theData, settheData] = useState('')
  const [serverResponse, settheServerResponse] = useState('')
  useEffect(() => {
    document.title = 'Home Harmony';
  }, [theData])
  const getData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_EXPRESS_SERVER_URL}/secure/getLoggedInInfo`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'sessionID': 'sessionID' + encodeURIComponent(document.cookie)
        },
      })
      if (response.status === 401) {
        settheData("STATUS CODE 401")
        settheServerResponse("STATUS CODE = 401")
      }
      if (response.status === 200) {
        if (response.data) {
          settheData(response.data)
          settheServerResponse("STATUS CODE = 200: Got data")
        } else {
          settheData("Status code = 200 however no data came through")
          settheServerResponse("Status code = 200 however no data came through")
        }
        
        console.log(response.data)
      } else {
        settheData("Status NOT 200:    NO DATA" + response.data)
        settheServerResponse("Status code not 200")
        console.error('No data received');
      }
    } catch (error) {
      settheData("COOKIE:" + encodeURIComponent(document.cookie) + " MESSAGE" + error.message)
      console.error('Failed to get data:', error);
      settheServerResponse(error.message,error.code,error.config)
    }
  }
  const handleLogout = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_EXPRESS_SERVER_URL}/logout`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'sessionID': 'sessionID' + encodeURIComponent(document.cookie)
        },
      });
      console.log("ATTEMPTING IT", response);
      if (response.status === 200) {
        localStorage.removeItem('isLoggedIn');
        setLogout(false);
      } else {
        console.error('Failed to logout:', response);
      }
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <div className="">
      {theData && <div className="testingLabels">TheData:{theData.userID} {theData.user_first_name}  {theData.user_email} </div>}
      <h1>{theData.userID ? "yes user data collected" : "no user data collected"}</h1>
      <h1>{serverResponse? <h2 className="testingLabels">Server response is {serverResponse}</h2>:"" }</h1>

      <h2>Your inventory 4</h2>
      <h1>working</h1>
      <ShowInventory filter={1} />
    
      <button onClick={handleLogout} className="input" id="logoutBut">
        Logout
      </button>
      <button onClick={getData} className="input" id="logoutBut">
        Get data
      </button>
    </div>
  );
}

export default YourInventory;
