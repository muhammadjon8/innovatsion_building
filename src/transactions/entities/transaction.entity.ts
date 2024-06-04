import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ApiTags('Transaction')
@Entity('Transaction')
export class Transaction {
  @ApiProperty({ example: 1, description: 'User ID' })
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty({
    example: '23000000',
    description: 'Transfer amount to transaction',
  })
  @Column()
  transfer_amount: string;

  @ApiProperty({
    example: '9860190102207843',
    description: 'Who is sending money',
  })
  @Column()
  from: string;

  @ApiProperty({
    example: '9860190102207843',
    description: 'Who is recieving money',
  })
  @Column()
  to: string;

  @ApiProperty({
    example: '2024-10-10',
    description: 'the date of the transaction',
  })
  @Column()
  date: Date;

  @ApiProperty({
    example: 'income/expense',
    description: 'Status of the transaction',
  })
  @Column()
  status: string;
}
