import React from 'react';
import "./Sidebar.css"
import logo from  "./l.png"

function Sidebar(props) {
    return (
        <div id="sidebar">
            <img src={logo} alt="logo" id ="logo"/>
            {props.children}
        </div>
    );
}

export default Sidebar;