import React from 'react'
import { useSelector } from 'react-redux'
export const TestApi = (props) => {
    const data = useSelector(state => state.userReducer.data)
    return (
        <div className='jumbtron'>
            <button onClick={() => console.log(data)}>click here</button>
        </div>
    )
}