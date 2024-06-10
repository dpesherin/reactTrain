import "./Pagination.css"
import React, {useEffect, useState} from 'react';
import Row from "../Row/Row";

function Pagination(props) {
    const [page, setPage] = useState(props.page);
    const [limit, setLimit]  = useState(props.limit);
    const  [total, setTotal]  = useState(props.total);
    const  [pageCount, setPageCount]   = useState(0);

    useEffect(() => {
        //логика получения количества страниц
        setPageCount(Math.ceil(total / limit));
    })

    const onLimitChange = (e)  => {
        setLimit(parseInt(e.target.value))
        props.onPaginationChange({page: page, limit: parseInt(e.target.value), total: total})
    }
    const onPageInc  =  ()   =>  {
        setPage(page + 1)
        props.onPaginationChange({page: page + 1, limit: limit, total: total})
    }

    const onPageDec  =  ()    =>   {
        setPage(page - 1)
        props.onPaginationChange({page: page - 1, limit: limit, total: total})
    }

    return (
        <div className="pagination-container">
            <Row>
                <div className="pagination-area">
                    <button className="pagination-button" onClick={onPageDec} disabled={page <= 1}>Назад</button>
                    <button className="pagination-button" onClick={onPageInc} disabled={page  >=  pageCount}>Вперед</button>
                    <span>Страница {page} из {pageCount}</span>
                </div>
                <div className="pagination-limit-area">
                    <select id="pagination-limit" onChange={(e) => onLimitChange(e)}>
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