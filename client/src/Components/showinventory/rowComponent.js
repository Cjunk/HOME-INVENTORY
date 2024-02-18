/*
    individual row component
*/
import React from 'react'
import './styles/rowComponent.css'
const RowComponent = ({ userID, ...restProps }) => {
    console.log(restProps)
    return (
        <div className="the-inventory-data-row-container">
            <img id={"picture"} src={"https://cfl.dropboxstatic.com/static/images/brand/logotype_white-vflRG5Zd8.svg"} alt={restProps.item_name} className="grid-item item-image" />
            <div id="name" className="grid-item top-inventory-data-col">Name: </div>
            <div id="descr" className="grid-item top-inventory-data-col" style={{ gridColumn: 'span 2' }}>Description & Keywords:</div>
            <div id="qty" className="grid-item top-inventory-data-col" >Qty</div>
            <div id="location" className="grid-item top-inventory-data-col" >Location</div>
            <div></div>
            <div></div>
            <div id="name" className="grid-item bottom-inventory-data-col">{restProps.item_name}</div>
            <div id="description" className="grid-item bottom-inventory-data-col" style={{ gridColumn: 'span 2' }}>{restProps.item_descr}</div>
            <div id="qty" className="grid-item bottom-inventory-data-col" >{restProps.soh_qty}</div>
            <div id="location" className="grid-item bottom-inventory-data-col" >{restProps.soh_locationID}</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default RowComponent
