import React from 'react'
import ArticleCard from '../ArticleCard'

export default function Thirdcolumn(props) {
    const third_column=[
        {
            article_title:'UAE: CBSE Term 1 exams begin tomorrow; important guidelines announced',
            article_author:'U. R. Oliver',
            btn_text:"OPEN HOUSE",
            imgsrc:'Media/Rectangle2335.png'
        },
        {
            article_title:'World Expo in Dubai: MP delegation holds discussion over film city and institute',
            article_author:'U. R. Oliver',
            btn_text:"DINE"
        },
        {
            article_title:'Meals on wheels best food truck in the UAE',
            article_author:'U. R. Oliver',
            btn_text:"DINE"
        }
  ]
  return (
    <div className="thirdcol">
    {third_column.map((x,y)=>{
       return <ArticleCard 
                key={y}
               articletag={x.btn_text} 
               isTitle={false} introlines={x.article_title} 
               articleauthor={x.article_author}
               chooseLayout={props.isDark?'Whole_article imgabove darkarticle':'Whole_article imgabove'}
               isImg={true} imgsrc={x.imgsrc&&x.imgsrc}
       />
       
    //    <Article
    //         key={y}
    //         articlebtn={x.btn_text} 
    //         articleheading={x.article_title} 
    //         articlesauthor={x.article_author}
    //         chooselayout='Whole_article imgabove'
    //         imgsrc={x.imgsrc&&x.imgsrc}
    //     />
    })}
    </div>
  )
}
