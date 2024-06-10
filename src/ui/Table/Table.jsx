import "./Table.css"
import React, {useState} from 'react';
import TRow from "./TRow";
import Pagination from "../Pagination/Pagination";
function Table(props) {
    const [pD, setPagData] =  useState({page:1, limit:10})
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
        </div>

    );
}

export default Table;