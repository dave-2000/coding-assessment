import { Module } from '@nestjs/common';
import { DogbreedService } from './dogbreed.service';
import { DogbreedResolver } from './dogbreed.resolver';

@Module({
  providers: [DogbreedService, DogbreedResolver]
})
export class DogbreedModule {}
