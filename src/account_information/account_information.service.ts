import { Injectable } from '@nestjs/common';
import { CreateAccountInformationDto } from './dto/create-account_information.dto';
import { UpdateAccountInformationDto } from './dto/update-account_information.dto';

@Injectable()
export class AccountInformationService {
  create(createAccountInformationDto: CreateAccountInformationDto) {
    return 'This action adds a new accountInformation';
  }

  findAll() {
    return `This action returns all accountInformation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountInformation`;
  }

  update(id: number, updateAccountInformationDto: UpdateAccountInformationDto) {
    return `This action updates a #${id} accountInformation`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountInformation`;
  }
}
