import { Test, TestingModule } from '@nestjs/testing';
import { AccountInformationService } from './account_information.service';

describe('AccountInformationService', () => {
  let service: AccountInformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountInformationService],
    }).compile();

    service = module.get<AccountInformationService>(AccountInformationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
