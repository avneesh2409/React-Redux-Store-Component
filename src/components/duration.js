import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { storeDuration } from '../store/graph'

const durationcss = {
    position: 'absolute',
    top: '29%',
    left: '0%'
}
const duration = () => {
    const dispatch = useDispatch()
    return (
        <div style={durationcss}>
            <select name='duration' onChange={(e) => dispatch(storeDuration(e.target.value))}>
                <option value='past_month'>Past Month</option>
                <option value='past_year'>Past Year</option>
                <option value='past_day'>Past Day</option>
            </select>
        </div>
    )
}

export default duration;