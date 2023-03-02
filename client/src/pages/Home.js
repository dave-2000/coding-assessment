import React from 'react'
import dog from '../assets/dog.jpg'
import Manager from '../components/Manager'

export default function Home() {
  return (
    <div>
        <img src={dog} alt='dog' className='w-screen object-cover h-screen'/>
        <div className='absolute inset-0 w-full h-full justify-center items-center flex bg-black' style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <Manager/>
      </div>
    </div>
  )
}
