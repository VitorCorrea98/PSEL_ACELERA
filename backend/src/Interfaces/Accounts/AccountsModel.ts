import { readAccounts, modifyAccounts } from './CRUD';
import IAccounts from './IAccounts';

export type IAccountModel = readAccounts<IAccounts>
  & modifyAccounts<IAccounts>