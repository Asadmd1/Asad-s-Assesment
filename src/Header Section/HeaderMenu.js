import React, { useState } from 'react'
import './Header.css'
// import { useState } from 'react/cjs/react.production.min'

export default function HeaderMenu(props) {

  const [isDarkmode, setisDarkmode] = useState(true)

  function switchMode(){
    isDarkmode?setisDarkmode(false):setisDarkmode(true)
    props.isDark(isDarkmode)
  }

  return (
    <div className={'HeaderMenu'}>
        <div className='menubtn'>
            <img src={isDarkmode?'Media/HeaderImages/hamburger.png':'Media/HeaderImages/whiteburger.png'}/>
            <p>MENU</p>
        </div>
        <button onClick={switchMode}>
            <img src={isDarkmode?'Media/HeaderImages/moon.png':'Media/HeaderImages/whitemoon.png'}/>
        </button>
    </div>
  )
}
