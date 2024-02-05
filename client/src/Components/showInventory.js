/*
  The Show Inventory component serves as the main inventory display window
  Created by Jericho Sharman
  Data is passed as a prop
  
*/
import React, { useState, useEffect } from 'react';
import InventoryItem from './inventoryItem'
function ShowInventory(props) {

  return (
    <div>
      <h1>HERE IS THE PROPS {props.itemID}</h1>
      <InventoryItem/>
    </div>
  )
}


export default ShowInventory;