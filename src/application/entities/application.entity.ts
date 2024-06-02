import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Application {
  @ApiProperty({ example: 1, description: 'User ID' })
  @PrimaryGeneratedColumn()
    id: number;
    
    
}
