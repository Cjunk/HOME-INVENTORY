/*
  Each inventory Item Component. containing the name, image , description  &some qty indicator
*/

import React from 'react';
import './styles/inventoryitem.css';
function formatDateTime(dateTimeString) {
  const date = new Date(dateTimeString);
  // Format the date as needed, for example: DD/MM/YYYY HH:mm:ss
  const formattedDateTime = date.toLocaleString(); // Adjust options as needed
  return formattedDateTime;
}
function InventoryRow(props) {
  const item = props.theItem;

  return (
    <div className="theitem-container">
      {/* <li>
        <span className="item-property">{item.item_name}</span>
        <span className="item-property">{item.soh_item}</span>
        <span className="item-property">{item.location_name}</span>
        <span className="item-property">{formatDateTime(item.soh_date_added)}</span>
        <span className="item-property-qty">{item.soh_qty}</span>
        <img src={"https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back02.jpg"} alt={item.item_name} className="item-image" />
      </li> */}
    </div>
  );
}

export default InventoryRow;

