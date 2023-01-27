import React from 'react'
import './Halffilled.css'

export default function HalfFilled(props) {
    return (
        <div className='sidePart'>
            <p className={props.tagclass}>{props.emptyorfull}</p>
            <p className={props.titleclass}>Louvre Abu Dhabi
                marks 4th anniversary
                with world class
                exhibition Louvre
                Abu Dhabi marks 4th</p>
            <p className={props.descclass}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel.</p>
        </div>
    )
}
