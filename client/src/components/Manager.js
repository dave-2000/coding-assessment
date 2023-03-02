import React from 'react'
import { useState } from "react"
import SignIn from './SignIn'
import Welcome from './Welcome'

export default function Manager() {
    const [showMessage, setShowMessage] = useState(true) // show the welcome message or not


  return (
    <div className="w-full h-full flex justify-center items-center">
        {showMessage? (<Welcome setShowMessage={setShowMessage}/>): (<SignIn/>)}
    </div>
  )
}
