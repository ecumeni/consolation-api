
import { Router } from 'express';
import consolationApi from '../controllers/consolationApi';

const botRouter = Router();

botRouter.post('/volunteerOnline', consolationApi.volunteerOnline);
botRouter.post('/volunteerDisconnect', consolationApi.volunteerDisconnect);




export default botRouter;