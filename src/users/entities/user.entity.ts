import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Application } from '../../application/entities/application.entity';

@ApiTags('users')
@Entity()
export class User {
  @ApiProperty({ example: 1, description: 'User ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'Muhammadjon Ubaydullayev',
    description: "User's full_name",
  })
  @Column()
  full_name: string;

  @ApiProperty({ example: '+998901006706', description: "User's phone number" })
  @Column({ unique: true })
  phone: string;

  @ApiProperty({
    example: 'AB78965412',
    description: "User's passport_seria number",
  })
  @Column()
  passport_seria_number: string;

  @Column()
  application_id: number;
}
