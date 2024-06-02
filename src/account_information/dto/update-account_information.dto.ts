import { PartialType } from '@nestjs/swagger';
import { CreateAccountInformationDto } from './create-account_information.dto';

export class UpdateAccountInformationDto extends PartialType(CreateAccountInformationDto) {}
