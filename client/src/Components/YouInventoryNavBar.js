/*
    The navbar for the logged in users and it only shows on the Your Inventory Home page

*/

import React from 'react'

const YouInventoryNavBar = () => {
    const menuItems = [
        {
            id: 1, title: "Inventory Setup", subList: [
                { id: 1, title: "Add Location" },
                { id: 2, title: "Add Item" }]
        },
        {
            id: 2, title: "Inventory", subList: [
                { id: 1, title: "SOH" },
                { id: 2, title: "Transactions" }
            ]
        }
    ]
    return (
        <div className="YourInventoryNavBar-container">
            <ul className="theListContainer">
                {menuItems.map((item, index) => {
                    return <li className="eachListItem">Add Location</li>
                })

                }

            </ul>
        </div>
    )
}

export default YouInventoryNavBar
