import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Assignment1FibonacciSequenceModule } from './assignment-1-fibonacci-sequence/assignment-1-fibonacci-sequence.module';
import { PrimeNumberModule } from './prime-number/prime-number.module';
import { FactorialCalculatorModule } from './factorial-calculator/factorial-calculator.module';
import { FactoriaCalculatorService } from './factoria-calculator/factoria-calculator.service';

@Module({
  imports: [Assignment1FibonacciSequenceModule, PrimeNumberModule, FactorialCalculatorModule],
  controllers: [AppController],
  providers: [AppService, FactoriaCalculatorService],
})
export class AppModule {}
