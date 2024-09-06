/* eslint-disable semi */
export interface IAccounts {
  id?: number;
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
