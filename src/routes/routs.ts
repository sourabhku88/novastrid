import { Router } from 'express';
import * as userControllers from '../controllers/user';
import { authentication } from '../middleware/auth';

const router: Router = Router();


router.post('/registration', userControllers.createUser);
router.post('/login', userControllers.login);
router.get('/user', authentication, userControllers.getUser);


export default router;