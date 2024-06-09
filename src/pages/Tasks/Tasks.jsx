import "./Tasks.css"

import React from 'react';
import TasksFilter from "../../components/TasksFilter/TasksFilter";
import TasksList from "../../components/TasksList/TasksList";

function Tasks(props) {
    return (
        <div className="wrapper">
            <TasksFilter />
            <TasksList pagination={true}/>
        </div>
    );
}

export default Tasks;