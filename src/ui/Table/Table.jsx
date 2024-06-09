import "./Table.css"
import React from 'react';
import TRow from "./TRow";
import Pagination from "../Pagination/Pagination";
function Table(props) {
    const theadArr = Object.keys(props.table[0])
    const thead = theadArr.map((value,index)=>{
        return(
            <th key={index}>{value}</th>
        )
    })
    const tbody  = props.table.map((item,i)=>{
        return(
            <TRow key={i} row={item} />
        )
    })

    let pagination = <div className="pagination"></div>;
    if(props.pagination){
        pagination = <Pagination/>
    }


    return (
        <div className="table-wrapper">
            <table className={props.className}>
                <thead>
                    <tr>
                        {thead}
                    </tr>
                </thead>
                <tbody>
                    {tbody}
                </tbody>
            </table>
            {pagination}
        </div>

    );
}

export default Table;