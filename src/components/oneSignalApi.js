import React, { Fragment } from 'react';
import Apidata from '../mockfile/players.json';
import Graph from './Graph.js';

var cur = new Date().getTime();
var str = [];
var offset = 1000 * 60 * 60;
var data = []
export default function oneSignal() {
    str = []
    if (Apidata) {
        console.log(Apidata)
        Apidata.players.map(e => {
            data.push(e.created_at)
            str.push(new Date(e.created_at * 1000))
        })
    }
    console.log("players data :-", str)
    function createMonthdata() {
        str = []
        var month = []
        let x = 0;
        for (let i = 0; i < 30 * 24; i++) {
            x = cur - (offset * i)
            month.push(x)
            str.push(new Date(x))
        }
        console.log(month, str);
        return {
            year: month,
            str
        }
    }
    function createYearData() {
        var year = []
        str = []
        let x = 0
        for (let i = 0; i < 365 * 24; i++) {
            x = cur - (offset * i)
            year.push(x)
            str.push(new Date(x))
        }
        console.log(year, str)
        return {
            year,
            str
        }
    }
    function createDayData() {
        var day = []
        str = []
        let x = 0;
        for (let i = 0; i < 24; i++) {
            day.push(cur * 1000 - (offset * i))
            str.push(new Date(cur - (offset * i)))
        }
        console.log(day, str)
        return {
            year: day,
            str
        }
    }

    return (
        <Fragment>
            <Graph years={createMonthdata} player={data} />
            <Graph years={createDayData} player={data} />
            <Graph years={createYearData} player={data} />
        </Fragment>
    )
}