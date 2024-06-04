import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDto {
  @ApiProperty({
    example: '23000000',
    description: 'Transfer amount to transaction',
  })
  transfer_amount: string;

  @ApiProperty({
    example: '9860190102207843',
    description: 'Who is sending money',
  })
  from: string;

  @ApiProperty({
    example: '9860190102207843',
    description: 'Who is recieving money',
  })
  to: string;

  @ApiProperty({
    example: '2024-10-10',
    description: 'the date of the transaction',
  })
  date: Date;

  @ApiProperty({
    example: 'income/expense',
    description: 'Status of the transaction',
  })
  status: string;
}
