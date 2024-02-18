/*
  This is the user LANDING page. Once logged in they land here

  First thing is to show the users inventory : Also have a welcome message with their name
  From this screen the user should be able to filter and scroll the inventory . pick an item and adjust the quantity.

  There should be an Operations Menu. For inbound and outbound into the SOH. 
  There should also be a SETTINGS menu for PROFILE, ITEM _MASTER, LOCATIONS _MASTER, THEME, CATEORIES, 
  There should also be a FEATURES menu.  Possibly for ChatGPT integration, Upgrade subscription, 
  There should b a transaction menu ?? Possibly for subcription (support ) members.

*/
import React, { useState, useEffect } from "react";
import axios from "axios";
import DummyComponent from "../Components/DummyComponent/dummyComponent";
import LocationForm from "../Components/LocationMaster/LocationMasterForm";
import ShowInventory from "../Components/showinventory/showInventory";
import { pageID } from "../constants/pageIDs";  // All the page ID's are in here for consistency
function YourInventoryHome(props) {
  const [theData, settheData] = useState("");
  const [locationData, setLocationData] = useState([]);

  /*
    Pages.  
    3 = SHOW INVENTORY 
    2 = 

  */
  // eslint-disable-next-line
  const [serverResponse, settheServerResponse] = useState("");
  useEffect(() => {
    document.title = "Home Harmony";
    getData(); // Get the users inventory data.
    fetchLocationData()
  }, []);
  const fetchLocationData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_EXPRESS_SERVER_URL}/secure/inventory/masterlocation/list`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            sessionID: "sessionID" + encodeURIComponent(document.cookie),
          },
        }
      );
      if (response.status === 200) {
        setLocationData(response.data); // Set the location data in state
      } else {
        console.error('Failed to fetch locations:', response);
        // Handle the case where the status is not 200
      }
    } catch (error) {
      console.error('Error fetching locations:', error);
      // Handle the error
    }
  };
  const getData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_EXPRESS_SERVER_URL}/secure/inventory/soh`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            sessionID: "sessionID" + encodeURIComponent(document.cookie),
          },
        }
      );
      if (response.status === 401) {
        settheData("STATUS CODE 401");
        settheServerResponse("STATUS CODE = 401");
      }
      if (response.status === 200) {
        if (response.data) {
          settheData(response.data);
          settheServerResponse("STATUS CODE = 200: Got data");
        } else {
          settheData("Status code = 200 however no data came through");
          settheServerResponse(
            "Status code = 200 however no data came through"
          );
        }
      } else {
        settheData("Status NOT 200:    NO DATA" + response.data);
        settheServerResponse("Status code not 200");
        console.error("No data received");
      }
    } catch (error) {
      settheData(
        "COOKIE:" +
        encodeURIComponent(document.cookie) +
        " MESSAGE" +
        error.message
      );
      console.error("Failed to get data:", error);
      settheServerResponse(error.message, error.code, error.config);
    }
  };
  // Determine which component to render based on the current page
  let PageComponent;
  switch (props.currentInventoryView) {
    case pageID.M_LOC:
      PageComponent = <LocationForm locationData={locationData} setLocationData={setLocationData} />;
      break;
    case 2:
      PageComponent = <DummyComponent />;
      break;
    case pageID.SOH:
      PageComponent = <ShowInventory theData={theData} />;
      break;
    default:
      PageComponent = <DummyComponent theData={theData} />;
  }
  return (
    <div className="">
      {/* <ShowInventory filter={1} theData={theData} /> */}
      {/* <YouInventoryNavBar setCurrentPage={setTheCurrentPage} currentPage={currentPage} /> */}

      {PageComponent}
      <button onClick={fetchLocationData}>get Data</button>
    </div>

  );
}
export default YourInventoryHome;
