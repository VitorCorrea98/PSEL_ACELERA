import { v4 } from 'uuid';

export class Account {
  public readonly id: string;
  
  public cpf: string;
  public name: string;
  public email: string;
  public password: string;
  public status: boolean;
  
  constructor(props: Omit<Account, 'id'>, id?: string) {
    this.cpf = props.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.status = props.status ?? true;
    this.id = id ?? v4();
  }
}
