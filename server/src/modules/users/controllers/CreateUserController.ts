import CreateUserService from "../services/CreateUserService";
import { classToClass } from 'class-transformer';
import { container } from "tsyringe";
import { Request, Response } from "express";

export default class CreateUserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const createUser = container.resolve(CreateUserService)

    const user = createUser.execute({
      email,
      password
    })

    return res.json( user )
  }
}