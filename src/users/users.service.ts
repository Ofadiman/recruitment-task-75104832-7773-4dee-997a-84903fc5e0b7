import { Injectable } from '@nestjs/common'
import { CreateUserBodyDto, CreateUserResponseDto } from './dto/create-user.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class UsersService {
  public constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}

  public async createUser(body: CreateUserBodyDto): Promise<CreateUserResponseDto> {
    const user = await this.usersRepository.save(body)
    return user
  }
}
