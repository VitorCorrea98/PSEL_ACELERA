import Joi from 'joi';
import { IAccounts } from '../../Interfaces/Accounts/IAccounts';

export default class AccountJOI {
  private joi

  constructor() {
    this.joi = Joi;
  }

  public validateKeys(account: IAccounts) {
    const accountJoi = this.joi.object({
      name: this.joi.string().min(3).required(),
      email: this.joi.string().email().required(),
      cpf: this.joi.string().length(11).required(),
      password: this.joi.string().min(6).required(),
    });
    const { error } = accountJoi.validate(account);
    return error;
  }
}
