import React from 'react'
import { LeafIcon } from 'lucide-react'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-emerald-200 bg-stone-50/90 backdrop-blur-md px-4 lg:px-40 py-3'>
        <div className='flex items-center justify-between max-w-[1200px] mx-auto'>
            <div className='flex items-center gap-2 text-slate-900'>
                <div className='size-8 text-emerald-500'>
                    <LeafIcon className='w-6 h-6 mt-1'/>
                </div>
                <h2 className='text-xl font-black leading-tight tracking-tight'>Nutraleaves</h2>
            </div>
            <nav className='hidden md:flex items-center gap-6'>
                <a className='text-sm font-medium hover:text-emerald-500 transition-colors' href="">Home</a>
                <a className='text-sm font-medium hover:text-emerald-500 transition-colors' href="">About</a>
                <a className='text-sm font-medium hover:text-emerald-500 transition-colors' href="">Benefits</a>
                <a className='text-sm font-medium hover:text-emerald-500 transition-colors' href="">Microgreens</a>
            </nav>
            <button className='bg-emerald-500 hover:bg-emerald-600 text-slate-900 text-sm font-bold px-5 py-2.5 rounded-xl transition-all'>
                Contact Us
            </button>
        </div>
    </header>
  )
}

export default Header