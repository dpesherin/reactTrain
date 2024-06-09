import "./Pagination.css"
import React, {useEffect, useState} from 'react';
import Row from "../Row/Row";

function Pagination(props) {
    const [page, setPage] = useState(1);
    const [limit, setLimit]  = useState(10);
    const  [total, setTotal]  = useState(40);
    const  [pageCount, setPageCount]   = useState(0);

    useEffect(() => {
        //логика получения количества страниц
        setPageCount(Math.ceil(total / limit));
    })



    return (
        <div className="pagination-container">
            <Row>
                <div className="pagination-area">
                    <button className="pagination-button" onClick={() => setPage(page - 1)} disabled={page <= 1}>Назад</button>
                    <button className="pagination-button" onClick={()  => setPage(page  +  1)} disabled={page  >=  pageCount}>Вперед</button>
                    <span>Страница {page} из {pageCount}</span>
                </div>
                <div className="pagination-limit-area">
                    <select id="pagination-limit" onChange={(e) => setLimit(parseInt(e.target.value))}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
            </Row>
        </div>
    );
}

export default Pagination;