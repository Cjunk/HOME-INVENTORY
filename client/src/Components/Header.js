/*
    The main header / banner. 
            <div className="banner-container">
                <img className="bannerImg" src='/img/Image1.jpg' alt="Describe the content of the image"></img>
            </div>
*/

import React from 'react';
import './styles/heading.css'
import NavigationBar from './navigationBar';
import Sidebar from './sideBar';

function Header(props) {
    return (
        <div className="banner-container">
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            
            <NavigationBar {...props} />
            {props.isLoggedIn ? (<Sidebar />) : (<></>)}
        </div>
    )
}
export default Header;
