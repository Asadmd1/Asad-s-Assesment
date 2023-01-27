import React, { useState } from 'react'
import HomepgArticles from './Homepage Articles (1st section)/HomepgArticles'
import PersonSection from './Person\'s details (2nd section)/PersonSection'
import MoreArticles from './More Articles (3rd section)/MoreArticles'
import AllCards from './Character Details (4th section)/AllCards'
import FullWidthArticle from './FullWidthArticle (5th section)/FullWidthArticle'
import OtherArticles from './Other Articles (6th section)/OtherArticles'
import WholeGlass from './Half filled (7th section)/WholeGlass'
import EachReview from './Reviews Section/EachReview'
import FoodSection from './FoodSection/FoodSection'
import WholeSection from './Videosec/WholeSection'
import Footer from './Footer section/Footer'
import Header from './Header Section/Header'
import './Main.css'

export default function App() {

  const [isDarkorLight, setisDarkorLight] = useState()
  if(isDarkorLight){
    document.body.style.backgroundColor='#232323'
    document.body.style.color='white';
  }else{
    document.body.style.backgroundColor='white'
    document.body.style.color='black';
  }
  

  
  return (
  <div className={isDarkorLight?'darkit':'lightitup'}>
    <Header isDark={(e)=> setisDarkorLight(e)}/>
    <HomepgArticles isDark={isDarkorLight}/>
    <PersonSection isDark={isDarkorLight}/>
    <MoreArticles isDark={isDarkorLight}/>
    <AllCards isDark={isDarkorLight}/>
    <FullWidthArticle/>
    <OtherArticles isDark={isDarkorLight}/>
    <WholeGlass isDark={isDarkorLight}/>
    <EachReview isDark={isDarkorLight}/>
    <FoodSection isDark={isDarkorLight}/>
    <WholeSection isDark={isDarkorLight}/>
    <Footer isDark={isDarkorLight}/>
  </div>
  )
}