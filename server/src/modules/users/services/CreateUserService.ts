import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories/IUserRepository";

import { hash } from 'bcryptjs';

interface IRequest {
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ email, password }: IRequest) {
    const checkEmailInUse = await this.usersRepository.findByEmail(email)

    if (checkEmailInUse) {
      throw new Error('Email already in use')
    }

    const passwordHash = await hash(password, 8)

    const user = await this.usersRepository.create({
      email,
      password: passwordHash,
    });

    return user;
  }
}

export default CreateUserService;