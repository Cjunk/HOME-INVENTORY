import React, { useState,useEffect } from 'react';
import './styles/login.css';
import axios from 'axios';

import ShowInventory from './showInventory';


function YourInventory({ setLogout }) {
  const [theData, settheData] = useState('')
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
        settheData ("STATUS CODE 401")
      }
      if (response.status === 200) {
        if (response.data) {
          settheData(response.data)
        } else {
          settheData("Status code = 200 however no data came through")
        }
        
        console.log(response.data)
      } else {
        settheData("Status NOT 200:    NO DATA" + response.data)
        console.error('No data received');
      }
    } catch (error) {
      settheData("COOKIE:" + encodeURIComponent(document.cookie) + " MESSAGE" + error.message)
      console.error('Failed to get data:', error);
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
    <div>
      {theData && <div className="formlabel">TheData:{theData.userID} {theData.user_first_name}  {theData.user_email} </div>}
      <>{theData.userID ? <ShowInventory/> :<div></div>}</>
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
