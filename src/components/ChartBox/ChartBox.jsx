import React from 'react';
import "./ChartBox.css"
import Chart from "react-apexcharts";

function ChartBox(props) {
    return (
        <div className="chartbox" style={{"width": props.widthContainer}}>
            <h1 className="titlechartbox">
                {props.title}
            </h1>
            <Chart options={props.options} series={props.series} width={props.width} type={props.type} height={props.height} />
        </div>
    );
}

export default ChartBox;