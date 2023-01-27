import React from 'react'
import ArticleCard from '../ArticleCard';
import '../Main.css'

export default function Firstcolumn(props) {
    const Mainarticle={
        article_title:'Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all',
        intro_lines:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel risus dignissim interdum. ",
        article_author:'U. R. Oliver',
        btn_text:"TRAVEL",
        imgsrc:"Media/Rectangle2332.png"
    }

  return (
  <div className='firstcol'>
    <ArticleCard chooseLayout={props.isDark?'Whole_article imgbeneath darkarticle':'Whole_article imgbeneath'}
    isImg={true} imgsrc={Mainarticle.imgsrc}
    articletag={Mainarticle.btn_text}
    isTitle={true} articletitle={Mainarticle.article_title}
    introlines={Mainarticle.intro_lines} articleauthor={Mainarticle.article_author}
    
    />
  </div>
  )
}
