import { Test, TestingModule } from '@nestjs/testing';
import { AdopteddogResolver } from './adopteddog.resolver';

describe('AdopteddogResolver', () => {
  let resolver: AdopteddogResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdopteddogResolver],
    }).compile();

    resolver = module.get<AdopteddogResolver>(AdopteddogResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
