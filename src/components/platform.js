import React from 'react'
import { useDispatch } from 'react-redux'
import { storePlatform } from '../store/graph'

const platformcss = {
    position: 'absolute',
    top: '29%',
    right: '0%'
}

export default function platform() {
    const dispatch = useDispatch()
    return (
        <div style={platformcss}>
            <select name='platform' onChange={(e) => dispatch(storePlatform(e.target.value))}>
                <option value={25}>All Platform</option>
                <option value={5}>Google Chrome</option>
                <option value={8}>Firefox</option>
                <option value={12}>Edge</option>
            </select>
        </div>
    )
}
