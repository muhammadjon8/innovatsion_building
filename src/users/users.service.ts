import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity'; // Assuming you have a User entity
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = this.userRepository.create(createUserDto);
      return this.userRepository.save(user);
    } catch (e) {
      return { error: e.message };
    }
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    try {
      const user = await this.userRepository.findOne({
        where: { id },
      });
      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      return user;
    } catch (e) {
      return { error: e.message };
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      await this.userRepository.update({ id }, updateUserDto);
      return this.findOne(id);
    } catch (e) {
      return { error: e.message };
    }
  }

  async remove(id: number) {
    const userToRemove = await this.findOne(id);
    if ('error' in userToRemove) {
      // User not found, return the error
      return userToRemove;
    }
    return this.userRepository.remove([userToRemove]);
  }
}
