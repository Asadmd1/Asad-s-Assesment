import React from 'react'
import './PersonSection.css'

export default function Person(props) {
  return (
    <div className={props.chooseLayout + " Whole_Person_Card"}>
      <p className="Person_Count">{props.personcount}</p>
      <img src={props.imgsrc} />
      <p className="Person_Name">Vladimir Putin</p>
      <p className="Person_Role">Meals on wheels best in the UAE</p>
    </div>
  )
}