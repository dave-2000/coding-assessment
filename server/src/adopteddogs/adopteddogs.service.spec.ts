import { Test, TestingModule } from '@nestjs/testing';
import { AdopteddogsService } from './adopteddogs.service';

describe('AdopteddogsService', () => {
  let service: AdopteddogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdopteddogsService],
    }).compile();

    service = module.get<AdopteddogsService>(AdopteddogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
