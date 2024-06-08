import React from 'react';
import Row from "../ui/Row/Row";
import "./Profile.css";
import Table from "../ui/Table/Table";
import UserInfo from "../ui/UserInfo/UserInfo";

function Profile(props) {
    return (
        <div className="container">
            <Row>
                <div className="avatar-place">
                    <img src={props.avatar} className="avatar"/>
                    <div className="btn-wrapper">
                        <button className="btn-main">
                            Управление профилем
                        </button>
                    </div>
                </div>
                <div className="info-place">
                    <h3>Информация о пользоватле</h3>
                    <UserInfo name={"Jane"} surname={"Doe"} email={"jsoe@example.com"} role={"Администратор"}/>
                    <h3>Последние сеансы</h3>
                    <Table table={[{Дата:"01.11.2024", IP: "10.101.13.11", Location: "Москва, Россия", Платформа: "Windows"}, {Дата:"29.10.2024", IP: "10.101.13.11", Location: "Москва, Россия", Платформа: "Windows"}, {Дата:"18.10.2024", IP: "2.19.30.111", Location: "Самара, Россия", Платформа: "IPhone"}]}/>
                </div>
            </Row>
        </div>
    );
}

export default Profile;