import React from 'react'
import './MoreArticles.css'
import MainArticleOnThird from './MainArticleOnThird'
import ArticleCard from '../ArticleCard'
import '../Main.css'

export default function MoreArticles(props) {
  const Card_Imgs=['Media/Thirdseccards/1.png','Media/Thirdseccards/2.png','Media/Thirdseccards/3.png']

  return (
    <div className='Alldaartcls'>
      <MainArticleOnThird isDark={props.isDark}/>
      <div className='Lower_Cards'>
        {Card_Imgs.map((x,y)=>
          {return <ArticleCard 
              key={y}
              isImg={true}
              imgsrc={x}
              isTitle={false}
              introlines='Meals on wheels best food trucks in the UAE'
              articletag='CULTURE'
              articleauthor='U. R. Oliver'
              chooseLayout={props.isDark?'Small_Card darkarticle':'Small_Card'}
          />
          })}
      </div>
    </div>
  )
}
