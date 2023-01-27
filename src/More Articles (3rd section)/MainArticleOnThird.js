import React from 'react'
import './MoreArticles.css'
import ArticleCard from '../ArticleCard'

export default function MainArticleOnThird(props) {
  return (
    <ArticleCard
      chooseLayout={props.isDark?'Third_sec_Article darkarticle':'Third_sec_Article'}
      articletag='TRAVEL'
      isTitle={true} articletitle='Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all'
      introlines='Exhin imlave asfear asfasas afsfeaarsa asfasfasf asfasfa ten cultable doice inverum'
      articleauthor='Cvita Doleschall'
      isImg={true} imgsrc='Media/Rectangle2336.png'
    />
  )
}
