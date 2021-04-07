import { Router } from "express";
import authenticateRouter from "./modules/users/routes/authenticate.routes";
import usersRouter from "./modules/users/routes/users.routes";

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/authenticate', authenticateRouter)

export default routes;