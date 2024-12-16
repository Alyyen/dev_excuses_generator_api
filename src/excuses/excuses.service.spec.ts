import { Test, TestingModule } from '@nestjs/testing';
import { ExcusesService } from './excuses.service';

describe('ExcusesService', () => {
  let service: ExcusesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExcusesService],
    }).compile();

    service = module.get<ExcusesService>(ExcusesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
