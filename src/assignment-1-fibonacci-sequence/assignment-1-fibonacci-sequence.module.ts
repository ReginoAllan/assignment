import { Module } from '@nestjs/common';
import { Assignment1FibonacciSequenceController } from './assignment-1-fibonacci-sequence.controller';
import { Assignment1FibonacciSequenceService } from './assignment-1-fibonacci-sequence.service';

@Module({
    controllers: [Assignment1FibonacciSequenceController],
    providers: [Assignment1FibonacciSequenceService]
})
export class Assignment1FibonacciSequenceModule {}
