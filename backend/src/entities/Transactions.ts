import { v4 } from 'uuid';

export class Transactions {
  public transactionId: string
  public document: string
  public date: Date
  public value: number
  public cashback: number
  
  constructor(props: Transactions, id?: string) {
    this.transactionId = v4();
    this.document = props.document;
    this.date = new Date();
    this.value = props.value;
    this.cashback = props.cashback ?? 0.00;
  }
}
