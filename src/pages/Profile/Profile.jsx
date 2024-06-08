import React, {useEffect, useState} from 'react';
import "./Profile.css";
import Table from "../../ui/Table/Table";
import UserInfo from "../../ui/UserInfo/UserInfo";
import RowStart from "../../ui/Row/RowStart";

function Profile(props) {
    const [userUnfo, setUserInfo] = useState({name: "", surname: "", email: "", role: ""});
    const [tableInfo, setTableInfo] = useState([{Дата:"", IP: "", Location: "", Платформа: ""}])

    useEffect(() => {
        setUserInfo({name: "Jane", surname: "Doe", email: "jane.doe@gmail.com", role:  "Администратор"})
        setTableInfo([{Дата:"01.11.2024", IP: "10.101.13.11", Location: "Москва, Россия", Платформа: "Windows"}, {Дата:"29.10.2024", IP: "10.101.13.11", Location: "Москва, Россия", Платформа: "Windows"}, {Дата:"18.10.2024", IP: "2.19.30.111", Location: "Балашиха, Россия", Платформа: "IOS"}])
    }, [])
    return (
        <div className="container">
            <RowStart>
                <div className="avatar-place">
                    <img src={props.avatar} className="avatar" alt="avatar" />
                    <div className="btn-wrapper">
                        <button className="btn-main">
                            Управление профилем
                        </button>
                    </div>
                </div>
                <div className="info-place">
                    <h3>Информация о пользоватле</h3>
                    <UserInfo name={userUnfo.name} surname={userUnfo.surname} email={userUnfo.email} role={userUnfo.role}/>
                    <h3>Последние сеансы</h3>
                    <Table table={tableInfo}/>
                </div>
            </RowStart>
        </div>
    );
}

export default Profile;