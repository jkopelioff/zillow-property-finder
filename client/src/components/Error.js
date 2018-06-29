import React from 'react'
import './Error.css'

const Error = ({error}) => {
    console.log(error)
    const {message} = error
    return (
        <div className="error">
            <p>{message}</p>
        </div>
    )
}

export default Error