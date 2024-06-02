import { Module } from '@nestjs/common';
import { AccountInformationService } from './account_information.service';
import { AccountInformationController } from './account_information.controller';

@Module({
  controllers: [AccountInformationController],
  providers: [AccountInformationService],
})
export class AccountInformationModule {}
