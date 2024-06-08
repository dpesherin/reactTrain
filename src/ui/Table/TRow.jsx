import React from 'react'
import "./Table.css"

function TRow(props) {
    console.log(Array.from(props.row))

    const row = Object.keys(props.row).map((key, ki)=>{
        return(
            <td className="trow" data-key={key}>{props.row[key]}</td>
        )
    })
    return (
        <tr>
            {row}
        </tr>
    );
}

export default TRow;