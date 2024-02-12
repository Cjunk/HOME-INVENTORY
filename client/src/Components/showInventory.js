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
  const headings = ['Item Name', 'Item number', 'Location', 'date', 'qty', 'Picture']
  return (
    <div>
      <h1>Your Inventory {props.itemID}</h1>
      <div className="inventory-container">
        <div className="inventory-heading">
          {headings.map((heading, index) => (
            <div key={index} className={`item-property${index === 4 ? '-qty' : ''}`}>{heading}</div>
          ))}
        </div>     
        {dataArray.map((item, index) => (  
          <div key={index} className="inventory-row">
            <div className="item-property">{item.item_name}</div>
            <div className="item-property">{item.soh_item}</div>
            <div className="item-property">{item.location_name}</div>
            <div className="item-property">{formatDateTime(item.soh_date_added)}</div>
            <div className="item-property-qty">{item.soh_qty}</div>
            <img src={"https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back02.jpg"} alt={item.item_name} className="item-image" />
          </div>
          ))}
      </div>
    </div>
  )
}
export default ShowInventory;