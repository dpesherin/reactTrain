import "./TasksList.css"
import React, {useEffect, useState} from 'react';
import Table from "../../ui/Table/Table";
import StatusMarker from "../../ui/StatusMarker/StatusMarker";
import {Link} from "react-router-dom";
import Pagination from "../../ui/Pagination/Pagination";

function TasksList(props) {
    const [pagData, setPagData] =  useState({page:1, limit:10, total: 100});
    const tableInfo = [
        {
            "ID": 1,
            "Title": <Link className="task-item" to="/tasks">Task 1</Link>,
            "Status": <StatusMarker type={"regular"}/>,
            "Responsible": "Jane Doe",
            "Created": "John Doe"
        },
        {
            "ID": 2,
            "Title": <Link className="task-item" to="/tasks">Task 2</Link>,
            "Status": <StatusMarker type={"hight"}/>,
            "Responsible": "Jane Doe",
            "Created": "John Doe"
        },
        {
            "ID": 3,
            "Title": <Link className="task-item" to="/tasks">Task 3</Link>,
            "Status": <StatusMarker type={"hight"}/>,
            "Responsible": "Jane Doe",
            "Created": "John Doe"
        },
        {
            "ID": 4,
            "Title": <Link className="task-item" to="/tasks">Task 4</Link>,
            "Status": <StatusMarker type={"regular"}/>,
            "Responsible": "Jane Doe",
            "Created": "John Doe"
        },
        {
            "ID": 5,
            "Title": <Link className="task-item" to="/tasks">Task 5</Link>,
            "Status": <StatusMarker type={"regular"}/>,
            "Responsible": "Jane Doe",
            "Created": "John Doe"
        },
        {
            "ID": 6,
            "Title": <Link className="task-item" to="/tasks">Task 6</Link>,
            "Status": <StatusMarker type={"hight"}/>,
            "Responsible": "Jane Doe",
            "Created": "John Doe"
        },
        {
            "ID": 7,
            "Title": <Link className="task-item" to="/tasks">Task 7</Link>,
            "Status": <StatusMarker type={"regular"}/>,
            "Responsible": "Jane Doe",
            "Created": "John Doe"
        }
    ]

    const handlePagination = (pD) => {
        setPagData(pD)
        console.log(pagData)
    }

    return (
        <div className="wrapper">
            <Table table={tableInfo} pagination={props.pagination} onSetPagination={handlePagination} />
            <Pagination page={pagData.page} total={pagData.total} limit={pagData.limit} onPaginationChange={handlePagination}/>
        </div>

    )
}

export default TasksList;