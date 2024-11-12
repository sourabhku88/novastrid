import { Router } from 'express';
import * as importControllers from '../controllers/importExcel';

const router: Router = Router();


router.get('/impport', importControllers.importExcel);


export default router;