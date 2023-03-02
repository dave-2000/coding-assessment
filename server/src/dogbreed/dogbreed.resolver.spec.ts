import { Test, TestingModule } from '@nestjs/testing';
import { DogbreedResolver } from './dogbreed.resolver';

describe('DogbreedResolver', () => {
  let resolver: DogbreedResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DogbreedResolver],
    }).compile();

    resolver = module.get<DogbreedResolver>(DogbreedResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
