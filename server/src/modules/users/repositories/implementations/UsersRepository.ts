import { getRepository, Repository } from 'typeorm';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import User from '../../entities/User';
import { IUsersRepository } from '../IUserRepository';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  public async create({ email, password }: ICreateUserDTO): Promise<User> {
    const createUser = this.repository.create({
      email,
      password
    })
    await this.repository.save(createUser)
    
    return createUser;
  }
  findById(id: string): Promise<User | undefined> {
    const findUser = this.repository.findOne(id);
    
    return findUser;
  }
  findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.repository.findOne({
      where: { email },
    });

    return findUser;
  }
  
}

export { UsersRepository };