import { Test, TestingModule } from '@nestjs/testing';
import { DogbreedService } from './dogbreed.service';

describe('DogbreedService', () => {
  let service: DogbreedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DogbreedService],
    }).compile();

    service = module.get<DogbreedService>(DogbreedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
