import React from 'react'

import HeroBanner from './components/HeroBanner'
import City from './components/City'

import PremiumVillas from './components/PremiumVillas'
import ExtraordinaryExperience from './components/ExtraordinaryExperience'
import ExclusiveEstates from './components/ExclusiveEstates'
import CelebrateStyle from './components/CelebrateStyle'
import LuxuryVilla from './components/LuxuryVilla'
import Testimonials from './components/Testimonials'
import LeadingPartners from './components/LeadingPartners'

const page = () => {
  return (
    <>
    
       <HeroBanner/>
      <City/>
      <PremiumVillas/>
      <ExtraordinaryExperience/>
      <ExclusiveEstates/>
      <CelebrateStyle/>
      
      <LeadingPartners/>
        
      <Testimonials/> 
      <LuxuryVilla/>
      
      
    </>
  )
}

export default page