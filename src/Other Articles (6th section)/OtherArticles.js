import React from 'react'
import ArticleCard from '../ArticleCard'
import '../Main.css'
import './OtherArticles.css'

export default function OtherArticles(props) {
    const articleImgs = [
        {imgsrc:'Media/6th Section Images/1.png' , chooselayout:'Acolumn wholeCard'},
        {imgsrc:'Media/6th Section Images/2.png' , chooselayout:'AreverseColumn wholeCard'},
        {imgsrc:'Media/6th Section Images/3.png' , chooselayout:'Acolumn wholeCard'}
    ]

    return (
        <div className='otherArticles'>
            {articleImgs.map((x, y) => {
                return <ArticleCard
                    key={y}
                    isImg={true}
                    isIntroline={false}
                    imgsrc={x.imgsrc}
                    articletag='OPEN HOUSE'
                    introlines='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel.'
                    articleauthor='U. R. Oliver'
                    chooseLayout={props.isDark? x.chooselayout+' darkarticle':x.chooselayout}
                />
            })}
        </div>
    )
}
