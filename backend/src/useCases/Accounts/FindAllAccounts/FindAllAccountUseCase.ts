import { Account } from '../../../entities/Account';
import { IAccountsRepository } from '../../../repositories/IAccountsRepository';

export class FindAllAccountUseCase {
    constructor(private accountRepository: IAccountsRepository) {}
    
    public async execute(): Promise<Account[]> {
      const accounts = await this.accountRepository.findMany();
      
      return accounts;
    }
}