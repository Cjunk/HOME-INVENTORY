import React, { useState, useEffect } from 'react';
//import './styles/login.css';

import './styles/testpage.css'
import axios from 'axios';
import ShowInventory from '../Components/showInventory';
import { logout } from '../services/authService';
function YourInventory({ handleLogout }) {
  const [theData, settheData] = useState('')
  const [serverResponse, settheServerResponse] = useState('')
  useEffect(() => {
    document.title = 'Home Harmony';
    getData()
  }, [])
  const getData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_EXPRESS_SERVER_URL}/secure/inventory/soh`, {
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
      } else {
        settheData("Status NOT 200:    NO DATA" + response.data)
        settheServerResponse("Status code not 200")
        console.error('No data received');
      }
    } catch (error) {
      settheData("COOKIE:" + encodeURIComponent(document.cookie) + " MESSAGE" + error.message)
      console.error('Failed to get data:', error);
      settheServerResponse(error.message, error.code, error.config)
    }
  }

  return (
    <div className="">
      {/* <ShowInventory filter={1} theData={theData} /> */}
      <ShowInventory theData={theData}/>
      <button onClick={getData} className="input" id="logoutBut">
        Get data
      </button>
    </div>
  );
}
export default YourInventory;
