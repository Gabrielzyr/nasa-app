import { container } from 'tsyringe';

import { UsersRepository } from '../modules/users/repositories/implementations/UsersRepository';
import { IUsersRepository } from '../modules/users/repositories/IUserRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)