import React from 'react'
import BreedDropdown from '../components/BreedDropdown'

export default function AdoptionShop() {
  return (
    <div className='h-screen'>

      <h2 className='text-center font-bold text-4xl mt-3'>Adoption store</h2>

      <p className='text-center'>find dogs to adopt <span className='text-green-500'>powered by dog.ceo</span></p>

      <BreedDropdown/>
    </div>
  )
}
