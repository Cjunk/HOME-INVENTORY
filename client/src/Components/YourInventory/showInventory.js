/*
  The Show Inventory component serves as the main inventory display window
  Created by Jericho Sharman
  Data is passed as a prop 
*/
import React, { useState, useEffect } from 'react';
import './styles/inventoryitem.css'
function formatDateTime(dateTimeString) {
  const date = new Date(dateTimeString);
  // Format the date as needed, for example: DD/MM/YYYY HH:mm:ss
  const formattedDateTime = date.toLocaleString(); // Adjust options as needed
  return formattedDateTime;
}
function ShowInventory(props) {
  const dataArray = Object.values(props.theData);
  const headings = ['Item Name', 'Item Number', 'Location', 'Date added', 'Qty', 'Picture']  // ID in the CSS file must match these headings. Spaces are replaced with a hythen '-' for use in the CSS file
  return (
    <div>
      
      <div className="inventory-container">
        <div className="inventory-heading">          
          {headings.map((heading, index) => (
            <div id= {heading.replace(/ /g, "-") }  key={index} className={`heading-item-property${index === 4 ? '-qty':''}` }>{heading}</div>
          ))}
      
        </div>     
        {dataArray.map((item, index) => (  
          <div key={index} className="inventory-row">
            <div id={headings[0].replace(/ /g, "-")} className="item-property">{item.item_name}</div>
            <div id={headings[1].replace(/ /g, "-")} className="item-property">{item.soh_item}</div>
            <div id={headings[2].replace(/ /g, "-")} className="item-property">{item.location_name}</div>
            <div id={headings[3].replace(/ /g, "-")} className="item-property">{formatDateTime(item.soh_date_added)}</div>
            <div id={headings[4].replace(/ /g, "-")} className="item-property-qty">{item.soh_qty}</div>
            <img id={headings[5].replace(/ /g, "-")} src={"https://cfl.dropboxstatic.com/static/images/brand/logotype_white-vflRG5Zd8.svg"} alt={item.item_name} className="item-image" />
          </div>
          ))}
      </div>
    </div>
  )
}
export default ShowInventory;