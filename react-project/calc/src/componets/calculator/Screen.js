import React from 'react'
import Current from './Current'
import Previos from './Previos'

function Screen({current,operation,perivos}) {
    return (
        <div className="screen">
            <Previos perivos={perivos} operation={operation}/>
            <Current current={current} />
        </div>
    )
}

export default Screen
