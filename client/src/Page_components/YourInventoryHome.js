/*
  This is the user LANDING page. Once logged in they land here

  First thing is to show the users inventory : Also have a welcome message with their name
  From this screen the user should be able to filter and scroll the inventory . pick an item and adjust the quantity.

  There should be an Operations Menu. For inbound and outbound into the SOH. 
  There should also be a SETTINGS menu for PROFILE, ITEM _MASTER, LOCATIONS _MASTER, THEME, CATEORIES, 
  There should also be a FEATURES menu.  Possibly for ChatGPT integration, Upgrade subscription, 
  There should b a transaction menu ?? Possibly for subcription (support ) members.

*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YouInventoryNavBar from '../Components/YouInventoryNavBar'; 
import './styles/testpage.css'
//import { getData } from './databaseFunctions.js/getData';
//import { menuList } from './NavigationBar';
//import AddLocation from './views/components/addLocation';
import ShowInventory from '../Components/showInventory';
function YourInventoryHome(props) {
  
  // const thePages = [
  //   { id: 1, name: "Show Inventory", ShowButton: 0 },
  //   { id: 2, name: "Add Location", ShowButton: 0 }
    
  // ]
  const [theData, settheData] = useState('')
  /*
    Pages.  
    1 = SHOW INVENTORY 
    2 = 

  */
  // const [currentPage,setCurrentPage] = useState(1)
  // eslint-disable-next-line 
  const [serverResponse, settheServerResponse] = useState('')
  
  useEffect(() => {
    document.title = 'Home Harmony';
    getData()  // Get the users inventory data. 
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
      <YouInventoryNavBar/>
      <ShowInventory theData={theData} />
      <button onClick={getData} className="input" id="logoutBut">
        Get data
      </button>
    </div>
  );
}
export default YourInventoryHome;
