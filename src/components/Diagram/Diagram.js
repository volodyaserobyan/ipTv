import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'

import './Diagram.scss'

const Diagram = () => {
    let labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let datasets = [
        {
            label: "My First dataset",
            fill: true,
            lineTension: 0.3,
            borderColor: "rgb(205, 130, 158)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(205, 130,1 58)",
            pointBackgroundColor: "rgb(255, 255, 255)",
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fill: true,
            lineTension: 0.3,
            borderColor: "rgb(35, 26, 136)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(35, 26, 136)",
            pointBackgroundColor: "rgb(255, 255, 255)",
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220, 1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
    const [dataLine, setDataLine] = useState(
        {
            labels: labels,
            datasets: datasets
        }
    );
    const [day, setDay] = useState("")
    const [week, setWeek] = useState("activeDay")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")

    const handleClick = e => {
        switch (e.target.innerHTML) {
            case "Day": {
                setDay("activeDay")
                setWeek("")
                setMonth("")
                setYear("")
                labels = ["1", "2", "3", "4", "5", "6", "7"]
                setDataLine({
                    labels: labels,
                    datasets: datasets
                })
                break
            }
            case "Week": {
                setDay("")
                setWeek("activeDay")
                setMonth("")
                setYear("")
                labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
                setDataLine({
                    labels: labels,
                    datasets: datasets
                })
                break;
            }
            case "Month": {
                setDay("")
                setWeek("")
                setMonth("activeDay")
                setYear("")
                labels = ["January", "February", "March", "April", "May", "June", "July"]
                setDataLine({
                    labels: labels,
                    datasets: datasets
                })
                break;
            }
            case "Year": {
                setDay("")
                setWeek("")
                setMonth("")
                setYear("activeDay")
                labels = ["2013", "2014", "2015", "2016", "2017", "2018", "2019"]
                setDataLine({
                    labels: labels,
                    datasets: datasets
                })
                break;
            }
            default: {

            }
        }
    }

    return (
        <>
            <div className="Diagram-Content">
                <h1>History Of Sales</h1>
                <div className="Diagram-Content_date">
                    <p className={day} onClick={handleClick}>Day</p>
                    <p className={week} onClick={handleClick}>Week</p>
                    <p className={month} onClick={handleClick}>Month</p>
                    <p className={year} onClick={handleClick}>Year</p>
                </div>
            </div>
            <Line data={dataLine} options={{ responsive: true }} />
        </>
    )
}

export default Diagram