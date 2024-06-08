import React from 'react';
import ChartBox from "../components/ChartBox/ChartBox";
import Row from "../ui/Row/Row";

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
                data: [1, 1, 5, 25, 80, 10, 4, 6, 1,19, 25, 4]
            },
            {
                name: 'Оперативная память',
                data: [10, 10, 5, 10, 8, 10, 4, 6, 10, 15, 12, 78],
                color: "yellow",
                background:  "yellow"
            }
        ]

    }

    return (
        <div className="container">
            <Row>
                <ChartBox title="Дисковое пространство" type="donut" width="400" options={{labels: ["Занято", "Свободно"]}} series={[60, 40]} widthContainer={"50%"}/>
                <ChartBox title="Оперативная память" type="donut" width="400" options={{labels: ["Занято", "Свободно"]}} series={[20, 80]} widthContainer={"50%"}/>
            </Row>
            <Row>
                <ChartBox title="Нагрузка" type="area" width="1050" options={options} series={options.series} widthContainer={"100%"} height="250"/>
            </Row>
        </div>
    );
}

export default Main;