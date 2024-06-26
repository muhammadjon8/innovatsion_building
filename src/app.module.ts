import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AccountInformationModule } from './account_information/account_information.module';
import { TransactionsModule } from './transactions/transactions.module';
import { ApplicationModule } from './application/application.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [],
      synchronize: true,
      logging: false,
    }),
    UsersModule,
    AccountInformationModule,
    TransactionsModule,
    ApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
