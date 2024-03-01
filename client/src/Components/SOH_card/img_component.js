//Will contain the single image or multiple images for each component
import React from 'react'
import './img_component.css'
import { HiArrowSmRight } from "react-icons/hi";
import { HiArrowSmLeft } from "react-icons/hi";
const ImgComponent = ({ currentsohcarddata }) => {
    console.log(currentsohcarddata);
    return (
        <div className="soh-img-wrapper">
            <div className="soh-main-image">
                <a className="soh-grid-item" href='#asdasda' style={{ fontSize: '26px' }}><HiArrowSmLeft /></a>
                <img
                    id={"picture"}
                    src={`${currentsohcarddata.item_prime_photo}`}
                    alt={currentsohcarddata.item_prime_photo}
                    className="main-item-image"
                />
                <a className="soh-grid-item" href='#asdasd' style={{ fontSize: '26px' }}><HiArrowSmRight /></a>
            </div>
            <div className="soh-imgs-bottom">
                <div className="eachImage"></div>
            </div>
        </div>
    )
}
export default ImgComponent

