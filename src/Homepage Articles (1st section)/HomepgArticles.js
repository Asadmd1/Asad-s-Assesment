import React from 'react'
import Firstcolumn from './Firstcolumn'
import Secondcolumn from './Secondcolumn'
import Thirdcolumn from './Thirdcolumn'
import './Homepage.css'

export default function HomepgArticles(props) {
  return (
    <div className='Articles_Section'>
        <Firstcolumn isDark={props.isDark}/>
        <Secondcolumn isDark={props.isDark}/>
        <Thirdcolumn isDark={props.isDark}/>
    </div>
  )
}
