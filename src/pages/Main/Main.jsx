import React from 'react';
import ChartBox from "../../components/ChartBox/ChartBox";
import Row from "../../ui/Row/Row";

function Main(props) {

    const options = {
        xaxis: {
            categories: ["00:00",  "02:00",  "04:00",  "06:00",   "08:00",   "10:00",   "12:00",   "14:00",   "16:00",   "18:00",   "20:00"]
        },
        yaxis: {
            min:  0,
            max:  100
        },
        stroke: {
            width: 2,
            curve: 'smooth'
        },
        series: [
            {
                name: 'Процессор',
                data: [9, 12, 24, 25, 6, 8, 10, 15, 3, 2, 5, 4]
            },
            {
                name: 'Оперативная память',
                data: [34, 40, 31, 29, 50, 28, 31, 21, 21, 20, 19, 27],
                color: "yellow",
                background:  "yellow"
            }
        ]

    }

    return (
        <div className="container">
            <Row>
                <ChartBox title="Дисковое пространство" type="donut" width="400" options={{labels: ["Занято", "Свободно"]}} series={[63, 37]} widthContainer={"50%"}/>
                <ChartBox title="Оперативная память" type="donut" width="400" options={{labels: ["Занято", "Свободно"]}} series={[5, 95]} widthContainer={"50%"}/>
            </Row>
            <Row>
                <ChartBox title="График нагрузки" type="area" width="1050" options={options} series={options.series} widthContainer={"100%"} height="250"/>
            </Row>
        </div>
    );
}

export default Main;