import React from 'react'
import Header from '../components/shared/Header'
import Hero from '../components/shared/Hero'
import Benefits from '../components/shared/Benefits'

const Home = () => {
  return (            
    <div className="bg-peral-900 text-slate-900">
    <Header/>
    <Hero/>
    <Benefits/>
    </div>
  )
}

export default Home