import { Request, Response } from 'express';
import { UpdateAccountsUseCase } from './UpdateAccountsUseCase';
import { mapHttpStatus } from '../../../Utils/mapStatusHTTP';

export class UpdateAccountsUseController {
  constructor(private updateAccountsUseCase: UpdateAccountsUseCase) {}

  public async execute(req: Request, res: Response) {
    const DTO = req.body;
    const { cpf } = req.params;

    const { status, data } = await this.updateAccountsUseCase.execute(DTO, cpf);
    return res.status(mapHttpStatus(status)).json(data);
  }
}