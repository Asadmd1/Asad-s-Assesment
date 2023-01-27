import React from 'react'
import ArticleCard from '../ArticleCard'
import '../Main.css'
import './FoodSection.css'

export default function FirstRow(props) {
  const Foods = [
    { foodtag: 'keto kebabs', imgsrc: 'Media/Foods/1.png' },
    { foodtag: 'italian deserts', imgsrc: 'Media/Foods/2.png' },
    { foodtag: 'japanese flavors', imgsrc: 'Media/Foods/3.png' }
  ]
  return (
    <div className='foodRow'>
      {Foods.map((x, y) => {
        return <ArticleCard
          key={y}
          chooseLayout={props.isDark?'sideflex decwidth darkarticle':'sideflex decwidth'}
          isImg={true} imgsrc={x.imgsrc}
          articletag={x.foodtag} isTitle={false}
          introlines='Meals on wheels best food trucks in the UAE'
          articleauthor='U. R. Oliver'
        />
      })}
    </div>
  )
}
