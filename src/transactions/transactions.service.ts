import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity'; // Assuming you have a Transactions entity
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionsRepository: Repository<Transaction>,
  ) {}

  async create(createTransactionsDto: CreateTransactionDto) {
    try {
      const transactions = this.transactionsRepository.create(createTransactionsDto);
      return this.transactionsRepository.save(transactions);
    } catch (e) {
      return { error: e.message };
    }
  }

  async findAll() {
    return this.transactionsRepository.find();
  }

  async findOne(id: number) {
    try {
      const transactions = await this.transactionsRepository.findOne({
        where: { id },
      });
      if (!transactions) {
        throw new NotFoundException(`Transactions with ID ${id} not found`);
      }
      return transactions;
    } catch (e) {
      return { error: e.message };
    }
  }

  async update(id: number, updateTransactionsDto: UpdateTransactionDto) {
    try {
      await this.transactionsRepository.update({ id }, updateTransactionsDto);
      return this.findOne(id);
    } catch (e) {
      return { error: e.message };
    }
  }

  async remove(id: number) {
    const transactionsToRemove = await this.findOne(id);
    if ('error' in transactionsToRemove) {
      // Transactions not found, return the error
      return transactionsToRemove;
    }
    return this.transactionsRepository.remove([transactionsToRemove]);
  }
}
