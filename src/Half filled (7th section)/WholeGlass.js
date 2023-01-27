import React from 'react'
import HalfFilled from './HalfFilled'
import './Halffilled.css'

export default function WholeGlass(props) {
  return (
    <div className={props.isDark?'wholeGlass changebg':'wholeGlass'}>
        <p className='datag blacktag fposition'>ONE STORY, TWO PERSPECTIVES</p>
        <HalfFilled emptyorfull='HALF FULL' tagclass='blacktag datag' titleclass='darktitle datitle' descclass='darkdesc dadesc'/>
        <div className='glassSection'>
            <img src={props.isDark?'Media/blackGlass.svg':'Media/useonwhite.png'} className={props.isDark?'darkGlassw':'nowhite'} />
        </div>
        <HalfFilled emptyorfull='HALF EMPTY' tagclass='transparenttag datag' titleclass='lighttitle datitle' descclass='lightdesc dadesc'/>
    </div>
  )
}
