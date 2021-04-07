import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import User from "../entities/User";
import { IUsersRepository } from "../repositories/IUserRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository,
  ) {};

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new Error('Email or password incorrect!');
    }

    const checkPassword = compare(password, user.password);

    if (!checkPassword) {
      throw new Error('Email or password incorrect!');
    }

    const token = sign({}, "355b04b936ea09c966c9d39757f1a040", {
      subject: user.id,
      expiresIn: "1d"
    });

    return {
      user,
      token
    }

  }
};

export default AuthenticateUserService;