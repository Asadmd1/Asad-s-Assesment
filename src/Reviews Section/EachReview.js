import React from 'react'
import ArticleCard from '../ArticleCard'
import './EachReview.css'

export default function EachReview(props) {
    let artclImgs = ['Media/Reviews/1.png', 'Media/Reviews/2.png', 'Media/Reviews/3.png', 'Media/Reviews/4.png']

    return (
        <div className={props.isDark?'ReviewsContainer bgdark':'ReviewsContainer'}>
            
            {artclImgs.map((x, y) => {
                return <div className='reviewsubContainer'>
                    <div className='upperpart'>
                        <img src={x} />
                        <div className='ratings'>
                            <img src='Media/Reviews/star.png' />
                            <p>4.4</p>
                        </div>
                    </div>

                    <ArticleCard
                        key={y}
                        chooseLayout={props.isDark?'Acolumn declwid darkarticle':'Acolumn declwid'}
                        isImg={false}
                        articletag='EAT'
                        introlines='Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in'
                        isTitle={false}
                        articleauthor='U. R. Oliver'
                    />

                </div>
            })}

        </div>
    )
}
