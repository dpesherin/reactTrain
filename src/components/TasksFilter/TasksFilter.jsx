import "./TaksFilter.css"

import React from 'react';
import RowEnd from "../../ui/Row/RowEnd";

function TasksFilter(props) {
    return (
        <div className="tf-wrapper">
            <RowEnd>
                <div className="Info-row">
                    <span className="Info-label">ID:</span>
                    <input type="number" className="form-control"/>
                </div>
                <div className="Info-row">
                    <span className="Info-label">Название:</span>
                    <input type="text" className="form-control"/>
                </div>
                <div className="Info-row">
                    <span className="Info-label">Приоритет:</span>
                    <select className="form-control">
                        <option className="form-control" id="none">Не выбрано</option>
                        <option className="form-control" id="regular">🟢 Обычный</option>
                        <option className="form-control" id="high"> 🔴 Высокий</option>
                    </select>
                </div>
            </RowEnd>
            <RowEnd>
                <div className="Info-row">
                    <span className="Info-label">Постановщик:</span>
                    <input type="text" className="form-control" placeholder="Фамилия Имя"/>
                </div>
                <div className="Info-row">
                    <span className="Info-label">Ответственный:</span>
                    <input type="text" className="form-control" placeholder="Фамилия Имя"/>
                </div>
                <div className="Info-row">
                    <button type="button" className="btn-main">Найти</button>
                </div>
            </RowEnd>
        </div>
    );
}

export default TasksFilter;