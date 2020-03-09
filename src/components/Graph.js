import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, Tooltip
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
                width={600} height={300} data={data}
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
