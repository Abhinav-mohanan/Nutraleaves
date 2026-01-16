import React from 'react'
import Header from '../components/shared/Header'
import Hero from '../components/shared/Hero'

const Home = () => {
  return (
    <div className="bg-stone-50 dark:bg-perl-700 text-slate-900 
    dark:text-black transition-colors duration-300">
    <Header/>
    <Hero/>
    </div>
  )
}

export default Home