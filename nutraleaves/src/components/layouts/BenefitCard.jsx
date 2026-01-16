import React from 'react'

const BenefitCard = ({icon:Icon,title,description}) => {
  return (
    <div className='group flex flex-col gap-4 rounded-xl border border-emerald-200 bg-stone-50 p-8 
                    hover:shadow-xl hover:-translate-y-1 transition-all'
        >
        <Icon className='text-emerald-500 w-10 h-10'/>
        <div className='flex flex-col gap-2'>
            <h3 className='text-slate-900 text-xl font-bold'>{title}</h3>
            <p className='text-emerald-700 text-sm leading-relaxed'>{description}</p>
        </div>
    </div>
  )
}

export default BenefitCard