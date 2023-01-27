import React from 'react'
import './Main.css'

export default function ArticleCard(props) {
  return (
    <div className={props.chooseLayout}>
      {props.isImg && <img src={props.imgsrc}/>}
      <div className='artclDetails'>
        <p className='artclTag'>{props.articletag}</p>
        {props.isTitle && <p className='artclTitle'>{props.articletitle}</p>}
        <p className='introlines'>{props.introlines}</p>
        <p className='artclAuthor'>{props.articleauthor}</p>
      </div>
    </div>
  )
}
