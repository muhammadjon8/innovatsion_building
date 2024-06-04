import { ApiProperty } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class AccountInformation {
  @ApiProperty({ example: 1, description: 'User ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: '655656454325423' })
  @Column()
  account_number: string;

  @Column()
  @ApiProperty({ example: 87600000 })
  total_amount: number;
}
