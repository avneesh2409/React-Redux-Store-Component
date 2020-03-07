import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const ShowData = (props) => {
    const data = props.data
    return (
        <Fragment>
            <div className="jumbotron">
                {
                    (data) ? data.map((e, key) => {
                        return (
                            <h1 key={key} className='text-center text-primary'>
                                <span>{e.userId}</span><strong>{e.title}</strong>
                            </h1>
                        )
                    }) : null
                }
            </div>
            <Link to='/testapi'>click here to redirect</Link>
        </Fragment>
    )

}
