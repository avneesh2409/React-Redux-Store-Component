import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Apidata from '../mockfile/players.json';
import Graph from './Graph.js';
import Platform from './platform';
import Duration from './duration';


export default function oneSignal() {
    const { graph } = useSelector(state => state)
    let cur = new Date().getTime();
    // var str = [];
    let offset = 1000 * 60 * 60;
    let data = []

    if (Apidata) {
        // console.log(Apidata)
        Apidata.players.map(e => {
            data.push({ created_at: e.created_at, device_type: e.device_type })
            // str.push(new Date(e.created_at * 1000))
        })
    }
    // console.log("players data :-", str)
    function createMonthdata() {
        // str = []
        var month = []
        let x = 0;
        for (let i = 0; i < 31 * 24; i++) {
            x = cur - (offset * i)
            month.push(x)
            // str.push(new Date(x))
        }
        // console.log(month, str);
        return {
            year: month,
            // str
        }
    }
    function createYearData() {
        var year = []
        // str = []
        let x = 0
        for (let i = 0; i < 366 * 24; i++) {
            x = cur - (offset * i)
            year.push(x)
            // str.push(new Date(x))
        }
        // console.log(year, str)
        return {
            year,
            // str
        }
    }
    // var data1 = []
    // function filterPlayers() {
    //     for (let index = 0; index < data.length; index++) {
    //         const e = data[index];
    //         if (e === graph.platform) {
    //             data1.push(e)
    //         }
    //     }
    // }
    function createDayData() {
        let day = []
        // str = []
        let x = 0;
        for (let i = 0; i < 24; i++) {
            x = cur * 1000 - (offset * i);
            day.push(x);
            // str.push(new Date(cur - (offset * i)))
        }
        // console.log(day, str)
        return {
            year: day,
            // str
        }
    }
    const onecss = {
        position: 'absolute',
        left: '0px',
        width: '100%',
        top: '50%'
    }
    let filter = null;
    switch (graph.duration) {
        case 'past_month':
            filter = createMonthdata
            break;
        case 'past_year':
            filter = createYearData
            break;
        case 'past_day':
            filter = createDayData
            break;
        default:
    }
    return (
        <Fragment>
            <Duration />
            <Platform />
            <div style={onecss}>
                <Graph years={filter} player={data} />
            </div>
        </Fragment>
    )
}