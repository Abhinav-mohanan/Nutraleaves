import React from 'react'

const MicrogreenCard = ({image, title, description}) => {
  return (
    <div className='flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-emerald-200 group'>
        <div className='aspect-square overflow-hidden'>
            <img src={image} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' alt={`${title} Microgreens`} />
        </div>
        <div className='p-6 flex flex-col gap-3'>
            <h3 className='text-slate-900 text-xl font-bold'>{title}</h3>
            <p className='text-emerald-700 text-sm leading-relaxed flex-grow'>
                {description}
            </p>
            {/* <a className='inline-flex items-center text-emerald-500 text-sm font-bold gap-1 hover:gap-2 transition-all' href="#">
                View Details
            </a> */}
        </div>
    </div>
  )
}

export default MicrogreenCard