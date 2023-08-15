import React from 'react';
import '../../styles/components/Layout/Header.css'
import logo from '../../styles/components/img/logo.png'; 


const Header = (props) => {
    return (
        <div className="header">
            <div href="index.html" className="logo">
                <img src={logo} alt="" />
                <h1>My React Page</h1>
            </div>
        </div>
    )
}

export default Header;