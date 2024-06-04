import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountInformation } from './entities/account_information.entity';
import { CreateAccountInformationDto } from './dto/create-account_information.dto';
import { UpdateAccountInformationDto } from './dto/update-account_information.dto';

@Injectable()
export class AccountInformationsService {
  constructor(
    @InjectRepository(AccountInformation)
    private readonly accountInformationRepository: Repository<AccountInformation>,
  ) {}

  async create(createAccountInformationDto: CreateAccountInformationDto) {
    try {
      const accountInformation = this.accountInformationRepository.create(
        createAccountInformationDto,
      );
      return this.accountInformationRepository.save(accountInformation);
    } catch (e) {
      return { error: e.message };
    }
  }

  async findAll() {
    return this.accountInformationRepository.find();
  }

  async findOne(id: number) {
    try {
      const accountInformation =
        await this.accountInformationRepository.findOne({
          where: { id },
        });
      if (!accountInformation) {
        throw new NotFoundException(
          `AccountInformation with ID ${id} not found`,
        );
      }
      return accountInformation;
    } catch (e) {
      return { error: e.message };
    }
  }

  async update(
    id: number,
    updateAccountInformationDto: UpdateAccountInformationDto,
  ) {
    try {
      await this.accountInformationRepository.update(
        { id },
        updateAccountInformationDto,
      );
      return this.findOne(id);
    } catch (e) {
      return { error: e.message };
    }
  }

  async remove(id: number) {
    const accountInformationToRemove = await this.findOne(id);
    if ('error' in accountInformationToRemove) {
      // AccountInformation not found, return the error
      return accountInformationToRemove;
    }
    return this.accountInformationRepository.remove([
      accountInformationToRemove,
    ]);
  }
}
