import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import AccountService from '../Services/Account_Service';
import { mapHttpStatus } from '../Utils/mapStatusHTTP';

export default class Auth {
  public accountService

  public secret

  constructor() {
    this.accountService = new AccountService();
    this.secret = process.env.SECRET || 'VitaoSinistro';
  }

  public async accountAuthLogin(req: Request, res: Response) {
    const { cpf, password } = req.body;
    const serviceResponse = await this.accountService.getByDocument(cpf);
    
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapHttpStatus(serviceResponse.status)).json(serviceResponse.data);
    } if (serviceResponse.data.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    
    const token = sign({ payload: serviceResponse.data }, this.secret);
    return res.status(200).json({ token });
  }
}