import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountInformationService } from './account_information.service';
import { CreateAccountInformationDto } from './dto/create-account_information.dto';
import { UpdateAccountInformationDto } from './dto/update-account_information.dto';

@Controller('account-information')
export class AccountInformationController {
  constructor(private readonly accountInformationService: AccountInformationService) {}

  @Post()
  create(@Body() createAccountInformationDto: CreateAccountInformationDto) {
    return this.accountInformationService.create(createAccountInformationDto);
  }

  @Get()
  findAll() {
    return this.accountInformationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountInformationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountInformationDto: UpdateAccountInformationDto) {
    return this.accountInformationService.update(+id, updateAccountInformationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountInformationService.remove(+id);
  }
}
