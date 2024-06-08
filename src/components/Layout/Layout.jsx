import "./Layout.css"

import React from 'react';

function Layout(props) {
    return (
        <div id="layout">
            {props.children}
        </div>
    );
}

export default Layout;