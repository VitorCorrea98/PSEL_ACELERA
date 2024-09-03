import { NextFunction, Request, Response, Router } from 'express';
import AccountController from '../Controllers/Account_Controller';
import AccountMiddleware from '../Middlewares/Accounts/AccountMiddleware';

const accountRouter = Router();

const accountController = new AccountController();
const accountMiddleware = new AccountMiddleware();

accountRouter.get('/', (req: Request, res: Response) => accountController.getAll(req, res));
accountRouter.post('/', 
  (req: Request, res: Response, next: NextFunction) => accountMiddleware
  .validateKeys(req, res, next),
  (req: Request, res: Response) => accountController.createAccount(req, res));

accountRouter.patch('/', (req: Request, res: Response) => accountController
  .updateAccount(req, res));

accountRouter.delete('/', (req: Request, res: Response) => accountController
  .deleteAccount(req, res));

export default accountRouter;
