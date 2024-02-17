import React from "react";
import "./styles/yourinventorynavbar.css";
import { pageID } from "./pageIDs";
const YouInventoryNavBar = (props) => {
  const [activeMenu, setActiveMenu] = React.useState(null); // For toggle functionality on touch devices

  const menuItems = [
    {
      id: 1,
      title: "Setup",
      subList: [
        { id: pageID.M_LOC, title: "Locations" },
        { id: pageID.ITEMS, title: "Items" },
        { id: pageID.CATs, title: "Categories" },
        { id: pageID.P_LOC, title: "Prime Locations" },
      ],
    },
    {
      id: 2,
      title: "Inventory",
      subList: [
        { id: pageID.SOH, title: "SOH" },
        { id: pageID.TRANS, title: "Transactions" },
      ],
    },
  ];

  const toggleSubMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id); // Toggle active menu
  };
 const clickedmenu = (prop) =>{
props.setCurrentPage(prop);
 }
  return (
    <div className="YourInventoryNavBar-container">
      
      <ul className="theListContainer">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className="eachListItem"
            onClick={() => toggleSubMenu(item.id)}
          >
            <button>{item.title}</button>{" "}
            {/* Use button for semantic correctness and accessibility */}
            <ul className={`submenu ${activeMenu === item.id ? "active" : ""}`}>
              {item.subList.map((subItem) => (
                <li
                  key={subItem.id}
                  className="eachsubListItem"
                  onClick={() =>clickedmenu(subItem.id)}
                >
                  <p>{subItem.title}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <h1 className="currentNavbarTitle">SOH</h1>
    </div>
  );
};

export default YouInventoryNavBar;
