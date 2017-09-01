import React from 'react'
import Cover from './../layouts/cover'
import Header from './../layouts/header'
import AboutPage from './about'
import ContactPage from './contact'
import BannerLayout from './../layouts/banner'

const IndexPage = () => (
  <main>
    <Cover 
      title = "FRONT-END DEVELOPER" 
      subtitle = "Muñoz, David" 
      text = "Hey... Welcome! In here, you can take a glance of everything that has to do with me and my work so you can have a better idea of what I'm able to do. Or in other words: a showing off."
    />
    <Header/>
    <AboutPage/>
    <BannerLayout 
      title = "Resume"
    />
  </main>
)

export default IndexPage
