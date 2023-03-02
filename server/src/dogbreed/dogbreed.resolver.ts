import { Resolver, Query, Args } from '@nestjs/graphql';
import { DogBreed } from './dogbreed.entity';
import { DogbreedService } from './dogbreed.service';
import { HttpException, HttpStatus,  } from '@nestjs/common';

@Resolver()
export class DogbreedResolver {
    constructor(private dogBreedService: DogbreedService){}

    @Query(returns => DogBreed)
    async dogbreed(@Args('name', { type: () => String }) name: string): Promise<DogBreed>{
        try{
            return this.dogBreedService.findDogBreedByName(name);
        } catch(e){
        }
        
    }
}
