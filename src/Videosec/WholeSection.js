import React from 'react'
import ArticleCard from '../ArticleCard'
import Videoplayable from './Videoplayable'
import './Videosec.css'
import '../Main.css'

export default function WholeSection(props) {
    const Imgs = ['Media/Video Section/1.png', 'Media/Video Section/2.png', 'Media/Video Section/3.png']
    return (
        <div className='VideosContainer'>
            {Imgs.map((x, y) => {
                return <div className='videosubcontainer'>
                    <Videoplayable key={y+2} imgsrc={x}/>
                    <ArticleCard
                        key={y}
                        chooseLayout={props.isDark?'Acolumn decenter darkarticle':'Acolumn decenter'}
                        isImg={false}
                        articletag='eat'
                        isTitle={false}
                        introlines='Meals on wheels: Meals on wheels: best in the UAE best'
                        articleauthor='U. R. Oliver' />
                </div>
            })}
        </div>
    )
}
