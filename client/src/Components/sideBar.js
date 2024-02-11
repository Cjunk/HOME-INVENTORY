/*
    The main header / banner. 
            <div className="banner-container">
                <img className="bannerImg" src='/img/Image1.jpg' alt="Describe the content of the image"></img>
            </div>
*/

import React, { useState } from 'react';
import './styles/sidebar.css';

function Sidebar() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    return (
        <div className="categories_container">
            <p className="catHeading" onMouseEnter={() => setIsDropdownVisible(true)}>Categories</p>
            <div
                className={`catlist ${isDropdownVisible ? 'visible' : ''}`}
                onMouseLeave={() => setIsDropdownVisible(false)}
            >
                <ul>
                    <li>ALL</li>
                    <li>WORK SHOP</li>
                    <li>KITCHEN</li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
