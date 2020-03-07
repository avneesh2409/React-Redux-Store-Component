import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import * as moment from 'moment';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Moment extends Component {


    render() {
        const option = {
            exportEnabled: true,
            animationEnabled: true,
            title: {
                text: "Delivery data"
            },
            data: [{
                type: "pie",
                startAngle: 75,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
                dataPoints: [
                    { y: 18, label: "Direct" },
                    { y: 49, label: "Organic Search" },
                    { y: 9, label: "Paid Search" },
                    { y: 5, label: "Referral" },
                    { y: 19, label: "Social" }
                ]
            }]
        }
        let dates = []
        for (let i = 0; i < 30; i++) {
            dates.push(new Date(moment().subtract(i, 'day').format('LLL')).getTime())
        }
        console.log(dates)

        const data1 = [
            { date: new Date("January 28, 2020 7: 14 AM").getTime(), platform: { chrome: 1, edge: 1, firefox: 1 } },
            { date: new Date("January 23, 2020 7: 14 AM").getTime(), platform: { chrome: 2, edge: 1, firefox: 0 } },
            { date: new Date("January 20, 2020 7: 14 AM").getTime(), platform: { chrome: 1, edge: 2, firefox: 2 } }
        ]
        console.log(data1)
        const platform = "chrome"
        const state = []
        let lower = dates[0]
        let upper = dates[dates.length - 1]
        let count = 0
        let test = null;
        let x = []
        data1.map((e) => {
            test = e.date
            if (test <= lower && test >= upper) {
                switch (platform) {
                    case "chrome":
                        count = count + e.platform.chrome
                        break;
                    case "firefox":
                        count = count + e.platform.firefox
                        break;
                    case "edge":
                        count = count + e.platform.edge
                        break;
                    default:
                        count = count + e.platform.chrome + e.platform.firefox + e.platform.edge
                }
            }
            x.push({ date: e.date, count: count })
            return 0;
        })
        console.log(x)
        dates.map(d => {
            state.push({ x: new Date(d), y: count })
            return 0;
        })


        const options = {
            animationEnabled: true,
            title: {
                text: "This is my test Api - 2017"
            },
            axisX: {
                title: "month of the years",
                valueFormatString: "MM"
            },
            axisY: {
                title: "Sales (in USD)",
                // prefix: "$",
                // includeZero: false
            },
            data: [{
                toolTipContent: "{x}: {y} <small>subscriber</small>",
                yValueFormatString: "###",
                xValueFormatString: "MMMM",
                type: "line",
                dataPoints: state
            }]
        }
        return (
            <div>
                <CanvasJSChart options={options} />
                <CanvasJSChart options={option} />
            </div >
        )
    }
}

export default Moment