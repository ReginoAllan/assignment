import { BadRequestException, Controller, Get, Param } from '@nestjs/common';

@Controller('assignment-1-fibonacci-sequence')
export class Assignment1FibonacciSequenceController {
    @Get(':n') // Ensure this is correct
    generateFibonacci(@Param('n') n: string): { sequence: number[] } {
        const numberN = parseInt(n, 10);
        if (isNaN(numberN) || numberN < 1) {
            throw new BadRequestException('Please provide a valid positive integer for n.');
        }
        const sequence = this.fibonacci(numberN);
        return { sequence };
    }

    private fibonacci(n: number): number[] {
        const sequence: number[] = [];
        let a = 0, b = 1;

        for (let i = 0; i < n; i++) {
            sequence.push(a);
            const next = a + b;
            a = b;
            b = next;
        }

        return sequence;
    }
}
