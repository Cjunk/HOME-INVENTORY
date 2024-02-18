/*
    individual row component
*/
import React from 'react'
import './styles/rowComponent.css'
const RowComponent = ({ userID, ...restProps }) => {
    console.log(restProps)
    return (
        <div className="the-inventory-data-row-container">
            {/* <img id={"picture"} src={"https://www.gstatic.com/webp/gallery/1.jpg"} alt={restProps.item_name} className="grid-item item-image" /> */}
            <img id={"picture"} src={`https://dl.dropboxusercontent.com/scl/fi/rdc48784286ll24f5o3xc/${restProps.item_prime_photo}?rlkey=${restProps.photo_key}`} alt={restProps.item_prime_photo} className="grid-item item-image" />
            <div id="name" className="grid-item top-inventory-data-col">Name: </div>
            <div id="descr" className="grid-item top-inventory-data-col" style={{ gridColumn: 'span 2' }}>Description & Keywords:</div>
            <div id="qty" className="grid-item top-inventory-data-col" >Qty</div>
            <div id="location" className="grid-item top-inventory-data-col" >Location</div>
            <div id="lastDate" className="grid-item top-inventory-data-col">Date last updated</div>
            <div></div>
            <div id="name" className="grid-item bottom-inventory-data-col">{restProps.item_name}</div>
            <div id="description" className="grid-item bottom-inventory-data-col bottom-inventory-data-col-desc" style={{ gridColumn: 'span 2' }}>{restProps.item_descr}</div>
            <div id="qty" className="grid-item bottom-inventory-data-col" >{restProps.soh_qty}</div>
            <div id="location" className="grid-item bottom-inventory-data-col" >{restProps.soh_locationID}</div>
            <div id="lastDate" className="grid-item bottom-inventory-data-col">{restProps.soh_last_updated}</div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default RowComponent
