import { Request, Response } from 'express';
import { UpdateAccountsUseCase } from './UpdateAccountsUseCase';

export class UpdateAccountsUseController {
  constructor(private updateAccountsUseCase: UpdateAccountsUseCase) {}

  public async execute(req: Request, res: Response) {
    const DTO = req.body;
    const { cpf } = req.params;

    const data = await this.updateAccountsUseCase.execute(DTO, cpf);
    return res.status(200).json(data);
  }
}