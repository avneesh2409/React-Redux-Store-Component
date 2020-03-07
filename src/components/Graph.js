import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Brush, Legend,
    ReferenceArea, ReferenceLine, ReferenceDot, ResponsiveContainer,
    LabelList, Label
} from 'recharts';

const data01 = [
    { date: '05-01', subscribers: 3 },
    { date: '05-02', subscribers: 5 },
    { date: '05-03', subscribers: 2 },
    { date: '05-04', subscribers: 6 },
    { date: '05-05', subscribers: 4 },
    { date: '05-06', subscribers: 5 },
    { date: '05-07', subscribers: 2 },
    { date: '05-08', subscribers: 3 },
    { date: '05-09', subscribers: 7 },
];
const calculate = (year, player, str) => {
    let count = 0;
    var obj = []
    year.forEach(e => {
        count = 0;
        for (let index = 0; index < player.length; index++) {
            let c = player[index];
            if (e >= (c * 1000)) {
                count = count + 1;
            }
        }
        obj.push({ date: new Date(e).toString(), subscribers: count })
    });
    console.log("resultant object :-", obj)
    return obj;
}
export const Graph = (props) => {
    const { years, player } = props;
    const year = years().year.reverse()
    const data = calculate(year, player);
    return (
        <div>
            <AreaChart
                width={800} height={400} data={data}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <XAxis dataKey="date" hide={true} />
                <YAxis dataKey="subscribers" hide={true} />
                <Tooltip />
                <Area stroke="#0088FE" type="monotone" dataKey="subscribers" />
            </AreaChart>
        </div>
    )
}

export default Graph;
