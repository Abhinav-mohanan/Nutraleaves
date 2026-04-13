import React, { useEffect } from 'react'
import { X } from 'lucide-react'
import { benefits_details } from '../../constants/benefits_details'

const BenefitModal = ({ benefit, onClose }) => {
  const { icon: Icon, title } = benefit
  const details = benefits_details[title]

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm'
      onClick={onClose}
    >
      <div
        className='relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 flex flex-col gap-6 animate-fade-in max-h-[90vh] overflow-y-auto'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors'
          aria-label='Close'
        >
          <X className='w-5 h-5' />
        </button>

        <div className='flex items-center gap-4'>
          <div className='bg-emerald-50 rounded-xl p-3'>
            <Icon className='text-emerald-500 w-8 h-8' />
          </div>
          <h2 className='text-slate-900 text-2xl font-black'>{title}</h2>
        </div>

        <div className='flex flex-col gap-1'>
          <span className='text-xs font-bold uppercase tracking-widest text-emerald-500'>Definition</span>
          <p className='text-slate-700 text-sm leading-relaxed'>{details.definition}</p>
        </div>

        <div className='flex flex-col gap-1'>
          <span className='text-xs font-bold uppercase tracking-widest text-emerald-500'>How It Works</span>
          <p className='text-slate-700 text-sm leading-relaxed'>{details.mechanism}</p>
        </div>

        <div className='flex flex-col gap-1'>
          <span className='text-xs font-bold uppercase tracking-widest text-emerald-500'>Key Action</span>
          <p className='text-slate-700 text-sm leading-relaxed'>{details.keyAction}</p>
        </div>

        <div className='flex flex-col gap-2'>
          <span className='text-xs font-bold uppercase tracking-widest text-emerald-500'>Key Microgreens</span>
          <div className='flex flex-wrap gap-2'>
            {details.keyMicrogreens.map((mg) => (
              <span key={mg} className='bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full'>
                {mg}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitModal