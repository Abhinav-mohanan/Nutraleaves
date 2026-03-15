import { CircleCheck } from 'lucide-react';
import HealthConfidence_img from '../../assets/HealthConfidence.png'
import React from 'react'

const HealthConfidence = () => {
  return (
    <section id='about' className="px-4 lg:px-40 py-24 bg-stone-50">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
                <div className="w-full aspect-[4/5] bg-cover bg-center rounded-2xl shadow-2xl overflow-hidden" 
                style={{backgroundImage: `url(${HealthConfidence_img})`}} />
                {/* <div className="absolute -bottom-6 -right-6 bg-emerald-500 p-8 rounded-2xl shadow-xl hidden md:block">
                    <p className="text-slate-900 font-black text-2xl">98%</p>
                    <p className="text-slate-900 text-sm font-bold">Bioavailability</p>
                </div> */}
            </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-6">
                    <h2 className="text-slate-900 text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                        Your health becomes your confidence...
                    </h2>
                    <p className="text-emerald-700 text-lg leading-relaxed">
                        Our formula is built on the power of polyphenols and essential vitamins to support your life extension goals. We believe that true beauty and health start at the cellular level.
                    </p>
                    <p className="text-slate-600 text-base leading-relaxed">
                    Microgreens are young seedlings of vegetables, herbs, cereals, and legumes, consist of developed cotyledons along with partially expanded true leaves, that are approximately 1–3 inches tall, 
                    these immature plants are harvested between 7-21 days (depending on variety), they have an aromatic flavour, concentrated nutrient content and come in a variety of colours and textures. 
                    They are suitable for eating raw, juiced, or blended, They are considered the next generation of superfoods and can support overall health from boosting immunity to reducing inflammation. 
                    By harvesting our microgreens at the peak of their nutritional potency, we ensure a concentration of vitamins, minerals and polyphenols that are significantly higher than mature plants, creating a potent synergy for anti-ageing.
                    </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <CircleCheck className="text-emerald-500 w-6 h-6" />
                            <span className="font-bold text-slate-900">Polyphenol-rich nutrient profiles</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CircleCheck className="text-emerald-500 w-6 h-6" />
                            <span className="font-bold text-slate-900">Synergistic anti-ageing properties</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HealthConfidence