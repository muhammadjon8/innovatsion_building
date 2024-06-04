import { ApiProperty } from '@nestjs/swagger';

export class CreateAccountInformationDto {
  @ApiProperty({ example: '655656454325423' })
  account_number: string;

  @ApiProperty({ example: 87600000 })
  total_amount: number;
}
