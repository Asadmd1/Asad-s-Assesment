import React from 'react'
import '../Main.css'
import FirstRow from './FirstRow'
import SecondRow from './SecondRow'
import './FoodSection.css'


export default function FoodSection(props) {
    
    
    return (
        <div className='allFoods'>
            <FirstRow isDark={props.isDark}/>
            <SecondRow isDark={props.isDark}/>
        </div>
    )
}