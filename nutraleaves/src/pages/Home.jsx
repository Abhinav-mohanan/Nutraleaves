import React from 'react'
import Header from '../components/shared/Header'
import Hero from '../components/shared/Hero'
import Benefits from '../components/shared/Benefits'
import Footer from '../components/shared/Footer'

const Home = () => {
  return (            
    <div className="bg-peral-900 text-slate-900">
    <Header/>
    <Hero/>
    <Benefits/>
    <Footer/>
    </div>
  )
}

export default Home