import { Request, Response } from 'express';
import { DeleteAccountsUseCase } from './DeleteAccountsUseCase';
import { mapHttpStatus } from '../../../Utils/mapStatusHTTP';

export class DeleteAccountsUseController {
  constructor(private deleteAccountsUseCase: DeleteAccountsUseCase) {}

  public async handle(req: Request, res: Response) {
    const { cpf } = req.params;

    const { status, data } = await this.deleteAccountsUseCase.execute(cpf);
    console.log({ status, data });
    return res.status(mapHttpStatus(status)).json(data);
  }
}