import { Test, TestingModule } from '@nestjs/testing';
import { Assignment1FibonacciSequenceService } from './assignment-1-fibonacci-sequence.service';

describe('Assignment1FibonacciSequenceService', () => {
  let service: Assignment1FibonacciSequenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Assignment1FibonacciSequenceService],
    }).compile();

    service = module.get<Assignment1FibonacciSequenceService>(Assignment1FibonacciSequenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
