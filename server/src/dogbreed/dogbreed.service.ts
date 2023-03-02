import { Injectable } from '@nestjs/common';
import { DogBreed } from './dogbreed.entity';
import axios from 'axios';

@Injectable()
export class DogbreedService {
    async findDogBreedByName(name:string): Promise<DogBreed>{
        const dogBreed = new DogBreed()
        const dogBreedUrl: string = `https://dog.ceo/api/breed/${name}/images`;

        const options = {
            method:'GET',
            url: dogBreedUrl
        }
        try{
            const res = await axios.request(options)
            dogBreed.dogImages = res.data !== null? res.data.message: [];
            console.log('test here', dogBreed)
            return dogBreed
        }catch(e){

        }

        return dogBreed
    }
}
