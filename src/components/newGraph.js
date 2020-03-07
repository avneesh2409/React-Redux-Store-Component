import React, { Component } from 'react';
import LineChart from 'react-linechart';

export class NewGraph extends Component {
    render() {
        const data = [
            {
                color: "blue",
                points: [{ x: 1, y: 2 }, { x: 3, y: 5 }, { x: 7, y: -3 }]

            },
        ];
        return (
            <div>
                <div className="App">
                    <h1>My First LineChart</h1>
                    <LineChart
                        width={800}
                        height={250}
                        data={data}
                        xLabel="duration"
                        yLabel="subscriber"
                        pointRadius={2}
                        xDimensions=" "
                        yDimensions=" "
                        onPointHover={(props) => [props.x = "hello", props.y = "i am here"]}
                        tooltipClass="text-success h1 "
                    />
                </div>
            </div>
        );
    }
}