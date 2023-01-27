import React from 'react'
import Person from './Person'
import './PersonSection.css'

export default function PersonSection(props) {
    let count=0
    const List_of_Persons=[
        {
            imgsrc:'Media/persons/person1.png'
        },
        {
            imgsrc:'Media/persons/person2.png'
        },
        {
            imgsrc:'Media/persons/person3.png'
        },
        {
            imgsrc:'Media/persons/person4.png'
        },
        {
            imgsrc:'Media/persons/person5.png'
        }
    ]
  return (
    <div className={props.isDark?'Whole_second_sec bgchang':'Whole_second_sec' }>
        {List_of_Persons.map((x,y)=>{
            count++
            return <Person key={y} chooseLayout='darkarticle' personcount={count} imgsrc={x.imgsrc}/>
        })}
    </div>
  )
}
