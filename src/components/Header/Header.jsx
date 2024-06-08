import React, {useEffect, useState} from 'react';
import "./Header.css";
import search from "./search.svg";
import {Link} from "react-router-dom";

function Header(props) {
    let notification;

    const [ncount, setCount] = useState(0);
    useEffect(() => {
        setCount(props.notifycount);
    }, [props.notifycount])

    if(ncount === 0){
        notification = <div></div>
    }else{
        notification  =  <span id="notify-count">{ncount}</span>
    }
    return (
        <div id="header">
            <div className="col start">
                <div className="search-place">
                    <input type="text" placeholder="Search" id="search"/>
                    <span className="search-icon-place">
                        <img src={search} id="search-icon" alt="search"/>
                    </span>
                </div>
            </div>
            <div className="col end">
                <div className="user-notify">
                    <img src="https://www.pngall.com/wp-content/uploads/11/Youtube-Bell-Icon-PNG-Free-Image.png" id="notify-icon" alt="notify-icon"/>
                    {notification}
                </div>
                 <Link to={"/profile"} className="profile-place">
                    <img src={props.avatar} id="user-avatar" alt="user-avatar"/>
                    <span id="user-name">{props.name}</span>
                </Link>
            </div>
        </div>
    );
}

export default Header;