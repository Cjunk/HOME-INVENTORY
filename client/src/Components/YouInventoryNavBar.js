import React from "react";
import "./styles/yourinventorynavbar.css";

const YouInventoryNavBar = (props) => {
  const [activeMenu, setActiveMenu] = React.useState(null); // For toggle functionality on touch devices

  const menuItems = [
    {
      id: 1,
      title: "Inventory Setup",
      subList: [
        { id: 1, title: "Add Location" },
        { id: 2, title: "Add Item" },
      ],
    },
    {
      id: 2,
      title: "Inventory",
      subList: [
        { id: 3, title: "SOH" },
        { id: 4, title: "Transactions" },
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
    </div>
  );
};

export default YouInventoryNavBar;
