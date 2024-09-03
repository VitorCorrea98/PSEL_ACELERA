import { Router } from 'express';
import accountRouter from './Account_Routes';

const router = Router();

router.use('/accounts', accountRouter);

export default router;