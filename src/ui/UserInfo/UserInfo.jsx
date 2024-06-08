import "./UserInfo.css"
import React from 'react';

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <div className="Info-row">
                <span className="Info-label">Имя:</span>
                <p className="Info-value">{props.name}</p>
            </div>
            <div className="Info-row">
                <span className="Info-label">Фамилия:</span>
                <p className="Info-value">{props.surname}</p>
            </div>
            <div className="Info-row">
                <span className="Info-label">Email:</span>
                <p className="Info-value">{props.email}</p>
            </div>
            <div className="Info-row">
                <span className="Info-label">Роль:</span>
                <p className="Info-value">{props.role}</p>
            </div>
        </div>
    );
}

export default UserInfo;