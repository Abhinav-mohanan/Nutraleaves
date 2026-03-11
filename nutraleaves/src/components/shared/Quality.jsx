import React from 'react'
import QualityBadge from '../layouts/QualityBadge'
import { quality_data } from '../../constants/quality_data'

const Quality = () => {
    const badges = quality_data
  return (
    <section className='px-4 lg:px-40 py-20 bg-white'>
        <div className='max-w-[1200px] mx-auto flex flex-col items-center gap-12'>
            <div className='text-center flex flex-col gap-4'>
                <h2 className='text-slate-900 text-3xl font-black tracking-tight'>Quality is very important</h2>
                <div className='w-16 h-1 bg-emerald-500 mx-auto rounded-full'/>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-2 gap-8 w-full'>
                {badges.map((badge,idx)=>(
                    <QualityBadge key={idx} {...badge}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Quality