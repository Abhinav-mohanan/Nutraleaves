import React from 'react'
import Header from '../components/shared/Header'
import Hero from '../components/shared/Hero'
import Benefits from '../components/shared/Benefits'
import Footer from '../components/shared/Footer'
import HealthConfidence from '../components/shared/HealthConfidence'
import Quality from '../components/shared/Quality'
import Microgreens from '../components/shared/Microgreens'

const Home = () => {
  return (            
    <div className="bg-peral-900 text-slate-900">
    <Header/>
    <Hero/>
    <Benefits/>
    <HealthConfidence/>
    <Quality/>
    <Microgreens/>
    <Footer/>
    </div>
  )
}

export default Home