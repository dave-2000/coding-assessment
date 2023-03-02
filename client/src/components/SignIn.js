import React, { useEffect } from 'react'
import { useState } from "react"
import { LOAD_USER } from '../Graphql/Queries'
import { useQuery, gql, useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { CREATE_USER} from '../Graphql/Mutations'



export default function SignIn() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    const [error, setError] = useState(false)

    const [isLoggingIn, setLoggingIn] = useState(true) // if user is not logging in he is signing up

    const [createUser, { loading}] = useMutation(CREATE_USER);

    const signInQuery = useQuery(LOAD_USER(email))

    const handleAction =(e)=>{
        // handle user sign in or sign up
        setError(false)
        e.preventDefault()
        if (isLoggingIn){
            handleSignIn()
        } else{
            handleSignUp()
        }
    }

    const handleName =(e)=>{
        setName(e.target.value)
    }

    const handleEmail =(e)=>{
        setEmail(e.target.value)
    }

    const handleSignIn =()=>{
        if (signInQuery.data !== undefined){
            navigate('/adoption')
        } else if(signInQuery.error){
            setError(true)
        }
    }

    const handleSignUp = async ()=>{

        try{
            const {data} = await createUser({
                variables: {
                  user: {
                    name: name,
                    email: email,
                  },
                },
              });

            if (data !== undefined){
                
            }
        
        } catch(e){
            console.log( 'error', e, e.message)
            setError(true)
        }
    }

    const handleLoggingInState =()=>{
        setError(false)
        setLoggingIn(!isLoggingIn)
    }


  return (
    <form className="w-1/2 p-10 rounded-lg bg-white max-w-xl" onSubmit={handleAction}>
        {!isLoggingIn && <input type='text' placeholder="your name" required className="bg-gray-300 w-full p-3 rounded-lg mb-5" onChange={handleName}/>}

        <input type='email' placeholder="your email" required className="bg-gray-300 w-full p-3 rounded-lg" onChange={handleEmail}/>

        <div className="flex justify-center mt-5">

            <button className="bg-green-500 w-1/2 py-2 rounded-xl text-white font-bold hover:bg-blue-500">{`${isLoggingIn? 'Sign in' : 'Sign up'}`}</button>

        </div>

        {error && <p className='text-center text-red-500'>something went wrong, try again</p>}

        <p className="text-0.5 text-gray-500 text-center mt-3 cursor-pointer" onClick={handleLoggingInState}>{`${isLoggingIn?'It is my first time here':'I have an account'}`}</p>
        
    </form>
  )
}
