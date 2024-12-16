import { Test, TestingModule } from '@nestjs/testing';
import { ExcusesController } from './excuses.controller';
import { ExcusesService } from './excuses.service';

describe('ExcusesController', () => {
  let controller: ExcusesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExcusesController],
      providers: [ExcusesService],
    }).compile();

    controller = module.get<ExcusesController>(ExcusesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
