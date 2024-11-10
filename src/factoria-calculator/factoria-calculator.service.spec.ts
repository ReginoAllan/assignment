import { Test, TestingModule } from '@nestjs/testing';
import { FactoriaCalculatorService } from './factoria-calculator.service';

describe('FactoriaCalculatorService', () => {
  let service: FactoriaCalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactoriaCalculatorService],
    }).compile();

    service = module.get<FactoriaCalculatorService>(FactoriaCalculatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
