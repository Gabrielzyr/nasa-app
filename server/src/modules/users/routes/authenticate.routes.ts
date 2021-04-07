import { Router } from 'express';
import AuthenticateUserController from '../controllers/AuthenticateUserController';


const authenticateRouter = Router();
const authenticateController = new AuthenticateUserController()

authenticateRouter.post(
  '/',
  authenticateController.create,
)

export default authenticateRouter;