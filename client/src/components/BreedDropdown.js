import React, {useEffect, useState} from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DogCard from './DogCard.js';
import { useQuery, gql } from '@apollo/client'
import { LOAD_DOGS } from '../Graphql/Queries.js';

export default function BreedDropdown() {

    // dogs are grouped into breeds
    const options = ['hound', 'borzoi', 'clumber'];
    const defaultOption = options[0];

    const [currentBreed, setCurrentBreed] = useState(defaultOption)

    const dogQuery = useQuery(LOAD_DOGS(currentBreed))

    const [dogs, setDogs] = useState([])

    const onSelect=(e)=>{
        setCurrentBreed(e.value)
        console.log('chaned')
    }

    useEffect(()=>{
        console.log(currentBreed)
        
        if (dogQuery.data !== undefined){
            console.log(dogQuery.data.dogbreed.dogImages)
            setDogs(dogQuery.data.dogbreed.dogImages)
        }
    }, [dogQuery.data])

    const getDogs =()=>{
    
    }

  return (
    <div>
      <Dropdown options={options} onChange={onSelect} value={defaultOption} placeholder="Select a dog breed"  className='ml-auto mr-auto w-1/3'/>
      <div className='grid grid-cols-4 gap-x-1 gap-y-3 p-5'>
        {dogs.map(dog =>(
            <DogCard key={dog} dog={dog}/>
        ))}
      </div>
    </div>
  )
}
