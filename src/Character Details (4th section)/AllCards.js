import React from 'react'
import './CharDetails.css'
import ArticleCard from '../ArticleCard'

export default function AllCards(props) {
    let listOfCharDetails=[
        {
            name:'Omar Mukhtar',
            imgsrc:'Media/Charactersinfourthsec/1.png'
        },
        {
            name:'Lil Larry',
            imgsrc:'Media/Charactersinfourthsec/2.png'
        },
        {
            name:'Lubna Hamdan',
            imgsrc:'Media/Charactersinfourthsec/3.png'
        },
        {
            name:'Shawn Jhon',
            imgsrc:'Media/Charactersinfourthsec/4.png'
        },
    ]
  return (
    <div className={props.isDark?'AllCards bgblcak':'AllCards'}>
        {listOfCharDetails.map((x,y)=>
        {return <ArticleCard 
            key={y} 
            articletag={x.name}
            introlines='Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in'
            isTitle={false}
            isImg={true}
            imgsrc={x.imgsrc}
            articleauthor='U. R. Oliver'
            chooseLayout={props.isDark?'Each_Card darkarticle':'Each_Card'}
        />
    })}
    </div>
  )
}
