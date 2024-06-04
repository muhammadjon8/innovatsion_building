import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccountInformationsService } from './account_information.service';
import { CreateAccountInformationDto } from './dto/create-account_information.dto';
import { UpdateAccountInformationDto } from './dto/update-account_information.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Account Information')
@Controller('account-information')
export class AccountInformationController {
  constructor(
    private readonly accountInformationService: AccountInformationsService,
  ) {}

  @ApiOperation({ description: 'Create a new Account Information' })
  @Post()
  create(@Body() createAccountInformationDto: CreateAccountInformationDto) {
    return this.accountInformationService.create(createAccountInformationDto);
  }

  @ApiOperation({ description: 'Get all Account Information' })
  @Get()
  findAll() {
    return this.accountInformationService.findAll();
  }

  @ApiOperation({ description: 'Get Account Information by ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountInformationService.findOne(+id);
  }

  @ApiOperation({ description: 'Update a Account Information by ID' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountInformationDto: UpdateAccountInformationDto,
  ) {
    return this.accountInformationService.update(
      +id,
      updateAccountInformationDto,
    );
  }

  @ApiOperation({ description: 'Delete a Account Information by ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountInformationService.remove(+id);
  }
}
