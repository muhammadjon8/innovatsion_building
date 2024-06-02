import { Test, TestingModule } from '@nestjs/testing';
import { AccountInformationController } from './account_information.controller';
import { AccountInformationService } from './account_information.service';

describe('AccountInformationController', () => {
  let controller: AccountInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountInformationController],
      providers: [AccountInformationService],
    }).compile();

    controller = module.get<AccountInformationController>(AccountInformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
