import React, { useEffect } from 'react'
import { X } from 'lucide-react'
import { microgreens_details } from '../../constants/microgreens_details'

const Section = ({ label, children }) => (
  <div className='flex flex-col gap-3'>
    <div className='flex items-center gap-3'>
      <span className='text-xs font-bold uppercase tracking-widest text-emerald-500'>{label}</span>
      <div className='flex-1 h-px bg-emerald-100' />
    </div>
    {children}
  </div>
)

const Pill = ({ label }) => (
  <span className='bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold px-3 py-1.5  rounded-full'>
    {label}
  </span>
)

const MicrogreenModal = ({ product, onClose }) => {
  const { image, title } = product
  const details = microgreens_details[title]

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
      className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm'
      onClick={onClose}
    >
      <div
        className='relative bg-white rounded-3xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-hidden flex flex-col animate-fade-in'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='relative h-64 sm:h-72 md:h-80 lg:h-95 flex-shrink-0 overflow-hidden rounded-t-3xl'>
          <img
            src={image}
            alt={title}
            className='w-full h-full object-contain scale-105'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent' />

          <button
            onClick={onClose}
            className='absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all backdrop-blur-sm border border-white/20'
          >
            <X className='w-4 h-4' />
          </button>

          <div className='absolute bottom-0 left-0 right-0 p-6'>
            <p className='text-emerald-300 text-xs font-bold uppercase tracking-widest mb-1'>Microgreens</p>
            <h2 className='text-white text-3xl font-black leading-tight'>{title}</h2>
          </div>
        </div>

        <div className='overflow-y-auto flex-1 p-6 flex flex-col gap-6'>

          <Section label="Key Nutrients">
            <div className='flex flex-wrap gap-2'>
              {details.keyNutrients.map((n) => <Pill key={n} label={n} />)}
            </div>
          </Section>

          <Section label="Vitamins">
            <div className='flex flex-wrap gap-2'>
              {details.vitamins.map((v) => <Pill key={v} label={v} />)}
            </div>
          </Section>

          <Section label="Minerals">
            <div className='flex flex-wrap gap-2'>
              {details.minerals.map((m) => <Pill key={m} label={m} />)}
            </div>
          </Section>

          <Section label="Polyphenols">
            <div className='flex flex-wrap gap-2'>
              {details.polyphenols.map((p) => <Pill key={p} label={p} />)}
            </div>
          </Section>

          <Section label="Health Benefits">
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
              {details.benefits.map((b) => (
                <div key={b} className='flex items-center gap-2.5 bg-emerald-50 rounded-lg px-3 py-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0' />
                  <span className='text-emerald-800 text-sm font-medium'>{b}</span>
                </div>
              ))}
            </div>
          </Section>

        </div>
      </div>
    </div>
  )
}

export default MicrogreenModal