import { Test, TestingModule } from '@nestjs/testing';
import { Assignment1FibonacciSequenceController } from './assignment-1-fibonacci-sequence.controller';

describe('Assignment1FibonacciSequenceController', () => {
  let controller: Assignment1FibonacciSequenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Assignment1FibonacciSequenceController],
    }).compile();

    controller = module.get<Assignment1FibonacciSequenceController>(Assignment1FibonacciSequenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
