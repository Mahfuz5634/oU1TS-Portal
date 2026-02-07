import { useState } from 'react'

import Hero from '../Components/Hero'
import FeaturedMarquee from '../Components/FeaturedMarquee'
import CategoryGrid from '../Components/CategoryGrid'
import AboutSection from '../Components/AboutSection'
import Footer from '../Components/Footer'

function MainLayout() {


  return (
    <>
      <Hero></Hero>
      <FeaturedMarquee></FeaturedMarquee>
      <CategoryGrid></CategoryGrid>
      <AboutSection></AboutSection>
     <Footer></Footer>
    </>
  )
}

export default MainLayout
