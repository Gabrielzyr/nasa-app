import { Request, Response } from "express";
import { container } from "tsyringe";
import AuthenticateUserService from "../services/AuthenticateUserService";

class AuthenticateUserController {
  public  async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const authenticateUserService = container.resolve(AuthenticateUserService);

    const { user, token} = await authenticateUserService.execute({
      email,
      password
    })

    return res.json({user, token});
  }
}

export default AuthenticateUserController;