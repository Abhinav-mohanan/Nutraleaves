import React, { useState } from 'react'
import { microgreen_products } from '../../constants/products'
import MicrogreenCard from '../layouts/MicrogreenCard'
import MicrogreenModal from '../layouts/MicrogreenModal'

const Microgreens = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <section id='microgreens' className='px-4 lg:px-40 py-24 bg-stone-50'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='flex flex-col items-center text-center gap-4 mb-16'>
          <h2 className='text-slate-900 text-3xl lg:text-5xl font-black leading-tight tracking-tight'>
            Our Premium Microgreens
          </h2>
          <p className='text-emerald-700 text-lg max-w-2xl font-medium'>
            Explore our curated collection of nutrient-dense greens, harvested at the peak of vitality to fuel your longevity journey.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {microgreen_products.map((product, idx) => (
            <MicrogreenCard
              key={idx}
              {...product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <MicrogreenModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  )
}

export default Microgreens