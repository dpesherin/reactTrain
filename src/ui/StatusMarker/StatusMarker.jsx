import "./StatusMarker.css"
import React from 'react';
import Row from "../Row/Row";

function StatusMarker(props) {
    return (
        <Row>
            <div className={props.type}>

            </div>
            <span className="medium">{props.type}</span>
        </Row>

    );
}

export default StatusMarker;