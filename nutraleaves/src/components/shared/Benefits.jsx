import React from 'react'
import { benefits_data } from '../../constants/benefits_datas'
import BenefitCard from '../layouts/BenefitCard'

const Benefits = () => {
    const benefits = benefits_data

  return (
    <section className='px-4 lg:px-40 py-20 bg-white'>
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex flex-col gap-12'>
                <div className='flex flex-col gap-4 max-w-[800px]'>
                    <h2 className='text-slate-900 text-3xl lg:text-5xl font-black leading-tight tracking-tight'>
                    Benefits beyond the imagination...
                    </h2>
                    <p className='text-emerald-700 text-lg font-medium'>
                    Our microgreens provide comprehensive protection and vitality for your long-term health.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {benefits.map((benefit,idx)=>(
                        <BenefitCard key={idx} {...benefit}/>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Benefits