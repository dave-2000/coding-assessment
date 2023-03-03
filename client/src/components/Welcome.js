import React from 'react'

export default function Welcome({setShowMessage}) {
  return (
    <div className='text-white opacity-100 justify-center '>

      <h1 className='text-5xl text-center'>Welcome to <span className='text-green-500 font-bold'>Puppy House</span></h1>

      <h2 className='text-center text-xl mt-3'>view beautiful dog photos</h2>

      <div className='flex justify-center mt-10'>

        <button onClick={()=>{setShowMessage(false)}} className='bg-green-500 py-5 px-10 rounded-lg opacity-100 hover:bg-blue-500'>Get started</button>
        
      </div>
      
    </div>
  )
}
