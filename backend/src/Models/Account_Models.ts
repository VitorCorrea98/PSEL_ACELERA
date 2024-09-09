import { IAccounts, IAccountUpdate } from '../Interfaces/Accounts/IAccounts';
import { IAccountModel } from '../Interfaces/Accounts/AccountsModel';
import { ORMModelAccounts } from '../Interfaces/ORM/Prisma/Accounts/CRUD';
import PrismaAccounts from '../ORM/Accounts_Implements';

export default class AccountModel implements IAccountModel {
  private static isInstance: AccountModel

  private constructor(private accountsRespository: ORMModelAccounts = new PrismaAccounts()) {}

  static create() {
    if (!AccountModel.isInstance) {
      AccountModel.isInstance = new AccountModel();
      return AccountModel.isInstance;
    }
    return AccountModel.isInstance;
  }

  public async getAll(): Promise<IAccounts[]> {
    const accounts = await this.accountsRespository.findMany();
    
    return accounts;
  }
  
  public async getByDocument(cpf: string): Promise<IAccounts | null> {
    const account = await this.accountsRespository.findByCPF(cpf);
    
    if (!account) {
      return null;
    }
    return account;
  }
  
  public async createAccount(account: IAccounts): Promise<IAccounts | null> {
    try {
      const createdAccount = await this.accountsRespository.create(account);
      return createdAccount;
    } catch (error) {
      console.log({ error });
      return null;
    }
  }
  
  public async updateAccount(account: IAccountUpdate, cpf: string): Promise<IAccounts | null> {
    try {
      const updatedAccount = await this.accountsRespository
        .update(account, cpf);
      
      return updatedAccount;
    } catch (error) {
      console.log({ error });
      return null;
    }
  }
  
  public async deleteAccount(cpf: string): Promise<IAccounts | null> {
    try {
      const deletedAccount = await this.accountsRespository.delete(cpf);
      
      return deletedAccount;
    } catch (error) {
      console.log({ error });
      return null;
    }
  }
}
