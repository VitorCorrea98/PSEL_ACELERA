import { Request, Response } from 'express';
import { DeleteAccountsUseCase } from './DeleteAccountsUseCase';

export class DeleteAccountsUseController {
  constructor(private deleteAccountsUseCase: DeleteAccountsUseCase) {}

  public async handle(req: Request, res: Response) {
    const { cpf } = req.params;

    const data = await this.deleteAccountsUseCase.execute(cpf);
    return res.status(200).json(data);
  }
}