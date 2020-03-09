import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, Tooltip, Legend
} from 'recharts';

const calculate = (year, player) => {
    let count = 0;
    var obj = []
    year.forEach(e => {
        count = 0;
        for (let index = 0; index < player.length; index++) {
            let c = player[index];
            if (e >= (c.created_at * 1000)) {
                count = count + 1;
            }
        }
        obj.push({ date: new Date(e).toString(), subscribers: count })
    });
    return obj;
}
export const Graph = (props) => {
    const { years, player } = props;
    const year = years().year.reverse()
    const data = calculate(year, player);
    return (
        <div>
            <AreaChart
                width={800} height={100} data={data}>
                <XAxis dataKey="date" hide={true} />
                <YAxis dataKey="subscribers" hide={true} />
                <Tooltip />
                <Area stroke="#0088FE" type="monotone" dataKey="subscribers" />
                <Legend layout="vertical" align="left" verticalAlign="middle" />
            </AreaChart>
        </div>
    )
}

export default Graph;
