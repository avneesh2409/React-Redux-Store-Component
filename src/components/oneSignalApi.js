import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Apidata from '../mockfile/players.json';
import Graph from './Graph.js';
import Platform from './platform';
import Duration from './duration';



export default function oneSignal() {
    const { graph } = useSelector(state => state)
    const cur = new Date().getTime();
    const offset = 1000 * 60 * 60;
    let data = [];
    let x = 0;
    if (Apidata) {
        Apidata.players.map(e => {
            data.push({ created_at: e.created_at, device_type: e.device_type })
        })
    }

    function createMonthdata() {
        let month = []
        for (let i = 0; i < 31 * 24; i++) {
            x = cur - (offset * i)
            month.push(x)
        }
        return {
            year: month,
        }
    }
    function createYearData() {
        let year = []
        for (let i = 0; i < 366 * 24; i++) {
            x = cur - (offset * i)
            year.push(x)
        }
        return {
            year
        }
    }

    function createDayData() {
        let day = []
        console.log("dau data :-",cur)
        x = cur ;
        for (let i = 0; i < 24; i++) {
            day.push(x);
            x = cur - (offset * i);
        }
        return {
            year: day
        }
    }
    const onecss = {
        position: 'absolute',
        left: '0px',
        width: '100%',
        top: '50%'
    }
    let dfilter = null;
    switch (graph.duration) {
        case 'past_month':
            dfilter = createMonthdata
            break;
        case 'past_year':
            dfilter = createYearData
            break;
        case 'past_day':
            dfilter = createDayData
            break;
        default:
    }
    let pfilter = [];
    switch(graph.platform)
    {
        case '5':
            for (let index = 0; index < data.length; index++) {
                if (data[index].device_type === 5) {
                    pfilter.push({created_at:data[index].created_at,device_type:data[index].device_type})
                }
        }
        break;
        case '8':
            for (let index = 0; index < data.length; index++) {
                if (data[index].device_type === 8) {
                    pfilter.push({created_at:data[index].created_at,device_type:data[index].device_type})
                }
        }
            break;
        case '12' :
            for (let index = 0; index < data.length; index++) {
                if (data[index].device_type === 12) {
                    pfilter.push({created_at:data[index].created_at,device_type:data[index].device_type})
                }
        }
            break;
        default :
            pfilter = data
    }
    return (
        <Fragment>
            <Duration />
            <Platform />
            <div style={onecss}>
                <Graph years={dfilter} player={pfilter} />
            </div>
        </Fragment>
    )
}