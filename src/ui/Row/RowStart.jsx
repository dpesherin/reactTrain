import React from 'react';
import "./Row.css"

function RowStart(props) {
    return (
        <div className="row-start">
            {props.children}
        </div>
    );
}

export default RowStart;