import { ServiceResponse } from '../Interfaces/ServiceResponse';
import ITransactions from '../Interfaces/Transactions/ITransactions';
import TransactionModel from '../Models/Transaction_Model';

export default class TransactionService {
  public transactionModel
  
  constructor() {
    this.transactionModel = new TransactionModel();
  }
  
  public async getAll(): Promise<ServiceResponse<ITransactions[]>> {
    const transctions = await this.transactionModel.getAll();
    
    return { status: 'SUCCESSFUL', data: transctions };
  }
  
  public async createPayment(cpf: string, value: number, date: Date): 
  Promise<ServiceResponse<ITransactions>> {
    const transaction = await this.transactionModel.createPayment(cpf, value, date);
    const message = 'Invalid data';

    if (!transaction) {
      return { status: 'INVALID_DATA', data: { message } };
    }
    return { status: 'SUCCESSFUL', data: transaction };
  }
}