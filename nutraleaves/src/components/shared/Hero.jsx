import React from 'react'
import HeroImage from '../../assets/HeroImage.png'
import { WHATSAPP_URL } from '../../constants/contact'

const Hero = () => {
  return (
    <section className="px-4 lg:px-40 py-10">
        <div className="max-w-[1200px] mx-auto">
            <div className="flex min-h-[580px] flex-col gap-8 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-6 pb-16 lg:px-16" 
                style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(17, 33, 22, 0.85) 100%),url(${HeroImage})`}}>
                    <div className="flex flex-col gap-4 max-w-[700px]">
                    <h1 className="text-white text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                        Ensure the power of antioxidants...
                    </h1>
                    <p className="text-white/90 text-lg lg:text-xl font-normal leading-relaxed">
                        When combined with polyphenols, vitamin C and vitamin E can have anti-ageing properties. They are known as lifespan essentials.
                    </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                    {/* <button className="min-w-[140px] bg-emerald-500 hover:scale-105 transition-transform text-slate-900 text-base font-bold h-12 px-6 rounded-xl">
                        Learn More
                    </button> */}
                    <a 
                    href={WHATSAPP_URL}
                    className="min-w-[140px] bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white text-base font-bold h-12 px-6 rounded-xl transition-all flex items-center justify-center">
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero