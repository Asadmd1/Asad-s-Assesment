import React from 'react'
import ArticleCard from '../ArticleCard'
import '../Main.css'
import './FoodSection.css'

export default function SecondRow(props) {
    const Foods = [
        { foodtag: 'vegan meals', imgsrc: 'Media/Foods/4.png' },
        { foodtag: 'french pasta', imgsrc: 'Media/Foods/5.png' },
        { foodtag: 'korean bbq', imgsrc: 'Media/Foods/6.png' }
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
