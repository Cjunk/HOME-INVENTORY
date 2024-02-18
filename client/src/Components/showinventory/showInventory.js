/*
  The Show Inventory component serves as the main inventory display window
  Created by Jericho Sharman
  Data is passed as a prop 
*/
import React from 'react';
import './styles/inventoryitem.css'
import RowComponent from './rowComponent';
// function formatDateTime(dateTimeString) {
//   const date = new Date(dateTimeString);
//   // Format the date as needed, for example: DD/MM/YYYY HH:mm:ss
//   const formattedDateTime = date.toLocaleString(); // Adjust options as needed
//   return formattedDateTime;
// }
function ShowInventory(props) {
  const dataArray = Object.values(props.theData);
  // const headings = ['Item Name', 'Location', 'Qty', 'Description', 'Picture']  // ID in the CSS file must match these headings. Spaces are replaced with a hythen '-' for use in the CSS file
  return (
    <div>
      <div className="inventory-container">
        {dataArray.map((item, index) => (
          <div className="data-row-container">
            <RowComponent {...item}/>
          </div>
        ))}
      </div>
    </div>
  )
}
export default ShowInventory;