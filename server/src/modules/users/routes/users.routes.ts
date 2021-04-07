import { Router } from 'express';
import CreateUserController from '../controllers/CreateUserController';


const usersRouter = Router();
const userController = new CreateUserController()

usersRouter.post(
  '/',
  userController.create,
)

export default usersRouter;