import "./Table.css"
import React from 'react';
import TRow from "./TRow";
function Table(props) {
    const theadArr = Object.keys(props.table[0])
    const thead = theadArr.map((value,index)=>{
        return(
            <th>{value}</th>
        )
    })
    const tbody  = props.table.map((item,index)=>{
        return(
            <TRow row={item} />
        )
    })

    return (
        <table className={props.className}>
            <tr>
            {thead}
            </tr>
            {tbody}
        </table>
    );
}

export default Table;