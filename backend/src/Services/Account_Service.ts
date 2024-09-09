import { IAccountModel } from '../Interfaces/Accounts/AccountsModel';
import { IAccounts, IAccountUpdate } from '../Interfaces/Accounts/IAccounts';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import AccountModel from '../Models/Account_Models';

export default class AccountService {
  static isInstance: AccountService;

  private constructor(private accountModel: IAccountModel = AccountModel.create()) {}
  
  static create() {
    if (!AccountService.isInstance) {
      AccountService.isInstance = new AccountService();
      return AccountService.isInstance;
    }
    return this.isInstance;
  }

  public async getAll(): Promise<ServiceResponse<IAccounts[]>> {
    const accounts = await this.accountModel.getAll();
    const teste = AccountModel.create();
    const teste2 = AccountModel.create();

    console.log(teste2 === teste);
    console.log(teste2 === this.accountModel);
    return { status: 'SUCCESSFUL', data: accounts };
  }
  
  public async getByDocument(cpf: string): Promise<ServiceResponse<IAccounts>> {
    const account = await this.accountModel.getByDocument(cpf);
    
    if (!account) {
      return { status: 'NOT_FOUND', data: { message: 'User not found' } };
    }
    return { status: 'SUCCESSFUL', data: account };
  }
  
  public async createAccount(account: IAccounts): Promise<ServiceResponse<IAccounts>> {
    const accountCreated = await this.accountModel.createAccount(account);
    
    if (!accountCreated) {
      return { status: 'INVALID_DATA', data: { message: 'Criação inválida.' } };
    }
    return { status: 'CREATED', data: accountCreated };
  }
  
  public async updateAccount(account: IAccountUpdate, cpf: string):
  Promise<ServiceResponse<IAccounts>> {
    const updatedAccount = await this.accountModel.updateAccount(account, cpf);
    const message = 'Inválido';
    
    if (!updatedAccount) {
      return { status: 'INVALID_DATA', data: { message } };
    }
    return { status: 'SUCCESSFUL', data: updatedAccount };
  }
  
  public async deleteAccount(cpf: string): Promise<ServiceResponse<IAccounts>> {
    const deletedAccount = await this.accountModel.deleteAccount(cpf);
    const message = 'Inlvaidado';
    
    if (!deletedAccount) {
      return { status: 'INVALID_DATA', data: { message } };
    }
    return { status: 'SUCCESSFUL', data: deletedAccount };
  }
}