import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application } from './entities/application.entity'; // Assuming you have a Application entity
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Application)
    private readonly applicationRepository: Repository<Application>,
  ) {}

  async create(createApplicationDto: CreateApplicationDto) {
    try {
      const application =
        this.applicationRepository.create(createApplicationDto);
      return this.applicationRepository.save(application);
    } catch (e) {
      return { error: e.message };
    }
  }

  async findAll() {
    return this.applicationRepository.find();
  }

  async findOne(id: number) {
    try {
      const application = await this.applicationRepository.findOne({
        where: { id },
      });
      if (!application) {
        throw new NotFoundException(`Application with ID ${id} not found`);
      }
      return application;
    } catch (e) {
      return { error: e.message };
    }
  }

  async update(id: number, updateApplicationDto: UpdateApplicationDto) {
    try {
      await this.applicationRepository.update({ id }, updateApplicationDto);
      return this.findOne(id);
    } catch (e) {
      return { error: e.message };
    }
  }

  async remove(id: number) {
    const applicationToRemove = await this.findOne(id);
    if ('error' in applicationToRemove) {
      // Application not found, return the error
      return applicationToRemove;
    }
    return this.applicationRepository.remove([applicationToRemove]);
  }
}
