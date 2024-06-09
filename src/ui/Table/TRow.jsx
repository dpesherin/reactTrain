import React from 'react'
import "./Table.css"

function TRow(props) {
    const row = Object.keys(props.row).map((keyval, ki)=>{
        return(
            <td className="trow" key={ki}> {props.row[keyval]}</td>
        )
    })
    return (
        <tr key={props.keyindex}>
            {row}
        </tr>
    );
}

export default TRow;