export interface IAccounts {
  id: string;
  cpf: string;
  name: string;
  email: string;
  password: string;
  status: boolean;
}

export interface IAccountUpdate {
  name: string
  email: string
  password: string
}
