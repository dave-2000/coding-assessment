import React from 'react'
import dog from '../assets/dog.jpg'

export default function DogCard({dog}) {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg">

        <img src={dog} alt='dogs' className="w-full object-cover h-2/3"/>

        <div className="p-3">

            <button className="bg-green-500 text-white p-2 rounded-xl">adopt</button>

        </div>

    </div>
  )
}
