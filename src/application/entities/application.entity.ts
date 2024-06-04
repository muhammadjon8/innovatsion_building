import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Application {
  @ApiProperty({ example: 1, description: 'User ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: '2' })
  @Column()
  user_id: string;

  @Column()
  @ApiProperty({ example: 'A' })
  block: string;

  @Column()
  @ApiProperty({ example: 'padez1' })
  padez_number: string;

  @Column()
  @ApiProperty({ example: '1', description: '1 dan 7 gacha tanlash mumkin' })
  floor: number;

  @Column()
  @ApiProperty({
    example: '1',
    description: '1 xonalidan 3 xonaligacha tanlash mumkin',
  })
  number_of_rooms: number;

  @Column()
  @ApiProperty({ example: '1234324554333298' })
  application_number: string;

  @Column()
  @ApiProperty({ example: '2021-01-01' })
  date: Date;
}
