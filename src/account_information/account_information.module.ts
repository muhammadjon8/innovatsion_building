import { Module } from '@nestjs/common';
import { AccountInformationsService } from './account_information.service';
import { AccountInformationController } from './account_information.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountInformation } from './entities/account_information.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountInformation])],
  controllers: [AccountInformationController],
  providers: [AccountInformationsService],
})
export class AccountInformationModule {}
