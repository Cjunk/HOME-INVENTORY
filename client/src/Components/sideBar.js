/*
    The main header / banner. 
            <div className="banner-container">
                <img className="bannerImg" src='/img/Image1.jpg' alt="Describe the content of the image"></img>
            </div>
*/

import React from 'react';
import './styles/sidebar.css'
function Sidebar(props) {
    return (
        <div >
            <div className="categories_container">
                <p className="catHeading">Categories</p>
                <ul className="catlist">
                    <li>ALL</li>
                    <li>WORK SHOP</li>
                    <li>KITCHEN</li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;