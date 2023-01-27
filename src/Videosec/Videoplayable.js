import React from 'react'
import './Videosec.css'

export default function Videoplayable(props) {
  return (
    <div className='imgcontainer'>
        <img  className='bgimage' src={props.imgsrc}/>
        <img className='playbtn' src='Media/Video Section/Playbtn.png'/>
    </div>
  )
}
