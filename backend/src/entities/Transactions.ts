import { v4 } from 'uuid';
import { CreateTransactionsDTO } from 
  '../useCases/Transactions/CreateTransactions/CreateTransactionsDTO';

export class Transaction {
  public transactionId: string
  public document: string
  public date: Date
  public value: number
  public cashback: number
  
  constructor(props: CreateTransactionsDTO) {
    this.transactionId = v4();
    this.document = props.document.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    this.date = new Date();
    this.value = props.value;
    this.cashback = 0.00;
  }
}
