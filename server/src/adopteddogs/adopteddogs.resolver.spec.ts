import { Test, TestingModule } from '@nestjs/testing';
import { AdopteddogsResolver } from './adopteddogs.resolver';

describe('AdopteddogsResolver', () => {
  let resolver: AdopteddogsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdopteddogsResolver],
    }).compile();

    resolver = module.get<AdopteddogsResolver>(AdopteddogsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
