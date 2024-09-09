import { NextFunction, Request, Response, Router } from 'express';
import AccountController from '../Controllers/Account_Controller';
import AccountMiddleware from '../Middlewares/Accounts/AccountMiddleware';
import { findAllAccountController } from '../useCases/Accounts/FindAllAccounts';
import { findByCPFController } from '../useCases/Accounts/FindByCPFAccounts';
import { createAccountUseController } from '../useCases/Accounts/CreateAccounts';
import { updateAccountsUseController } from '../useCases/Accounts/UpdateAccounts';
import { deleteAccountsUseController } from '../useCases/Accounts/DeleteAccounts';

const accountRouter = Router();

const accountController = AccountController.create();
const accountMiddleware = new AccountMiddleware();

accountRouter.get('/', (req: Request, res: Response) => findAllAccountController.handle(req, res));
accountRouter.get('/cpf', (req: Request, res: Response) => findByCPFController.handle(req, res));

accountRouter.post('/', 
  (req: Request, res: Response, next: NextFunction) => accountMiddleware
  .validateKeys(req, res, next),
  (req: Request, res: Response) => createAccountUseController
  .handle(req, res));

accountRouter.patch('/update/:cpf', 
  (req: Request, res: Response) => updateAccountsUseController.execute(req, res));

accountRouter.delete('/delete/:cpf', 
  (req: Request, res: Response) => deleteAccountsUseController.handle(req, res));

export default accountRouter;
