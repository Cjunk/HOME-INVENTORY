/*
  The Show Inventory component serves as the main inventory display window
  Created by Jericho Sharman
  Data is passed as a prop 
*/
import React, { useState } from "react";
import "./styles/inventoryitem.css";
import RowComponent from "./rowComponent";

// function formatDateTime(dateTimeString) {
//   const date = new Date(dateTimeString);
//Format the date as needed, for example: DD/MM/YYYY HH:mm:ss
//   const formattedDateTime = date.toLocaleString(); // Adjust options as needed
//   return formattedDateTime;
// }
const handleDoubleClick = (item) => {
  
  // Handle double click action here
  console.log('Double clicked item:', item);
};
function ShowInventory(props) {
  const [screenView, setScreenView] = useState(1);
  const dataArray = Object.values(props.theData);
  // const headings = ['Item Name', 'Location', 'Qty', 'Description', 'Picture']  // ID in the CSS file must match these headings. Spaces are replaced with a hythen '-' for use in the CSS file
  return (
    
      <div className="inventory-container">
        {screenView === 1
          ? dataArray.map((item, index) => (
              <div key={index} className="data-row-container">
                <RowComponent {...item} />
              </div>
            ))
          : "nothing"}
      </div>
    </div>
  );

}
export default ShowInventory;
