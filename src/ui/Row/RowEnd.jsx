import React from 'react';
import "./Row.css"

function RowEnd(props) {
    return (
        <div className="row-end">
            {props.children}
        </div>
    );
}

export default RowEnd;