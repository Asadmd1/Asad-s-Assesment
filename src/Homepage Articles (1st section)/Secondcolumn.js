import React from 'react'
import ArticleCard from '../ArticleCard'


export default function Secondcolumn(props) {
  const second_column=[
        {
            article_title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel.',
            article_author:'U. R. Oliver',
            btn_text:"DINE"
        },
        {
            article_title:'Phasellus in odio vel risus dignissim interdum. Sed vulputate pretium lobortis.',
            article_author:'U. R. Oliver',
            btn_text:"DINE"
        },
        {
            article_title:'Meals on wheels best food trucks in the UAE',
            article_author:'U. R. Oliver',
            btn_text:"OPEN HOUSE",
            imgsrc:"Media/Rectangle2334.png"
        }
  ]

    return (
    <div className='secondcol'>
    {second_column.map((x,y)=>{
       return <ArticleCard 
            key={y}
            articletag={x.btn_text} 
            introlines={x.article_title}
            isTitle={false} 
            articleauthor={x.article_author}
            chooseLayout={props.isDark?'Whole_article imgabove darkarticle':'Whole_article imgabove'}
            isImg={true} imgsrc={x.imgsrc&&x.imgsrc}

       />
    })}
    </div>
  )
}
