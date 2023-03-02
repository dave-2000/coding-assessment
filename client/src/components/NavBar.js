import React from 'react'

export default function NavBar() {
  return (
    <nav className="bg-black flex justify-between p-3 items-center">

        <p className="text-green-500 font-bold text-xl">Puppy<span className="text-white">House</span></p>

        <ul className="text-white flex justify-evenly ">
            <li className="mr-10">Store</li>
            <li>your collection</li>
        </ul>

        <button className="text-white border-green-500 border-2 p-2 rounded-lg">Log out</button>
    </nav>
  )
}
