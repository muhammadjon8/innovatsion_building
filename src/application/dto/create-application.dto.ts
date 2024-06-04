import { ApiProperty } from '@nestjs/swagger';

export class CreateApplicationDto {
  @ApiProperty({ example: '2' })
  user_id: string;

  @ApiProperty({ example: 'A' })
  block: string;

  @ApiProperty({ example: 'padez1' })
  padez_number: string;


  @ApiProperty({ example: '1', description: '1 dan 7 gacha tanlash mumkin' })
  floor: number;

  @ApiProperty({ example: '1', description: "1 xonalidan 3 xonaligacha tanlash mumkin"})
  number_of_rooms: number;

  @ApiProperty({ example: '1234324554333298' })
  application_number: string;

  @ApiProperty({ example: '2021-01-01' })
  date: Date;
}
