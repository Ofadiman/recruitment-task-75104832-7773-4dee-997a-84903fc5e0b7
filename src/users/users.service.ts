import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateUserBodyDto, CreateUserResponseDto } from './dto/create-user.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity'
import { Repository } from 'typeorm'
import { GetUserByIdResponseDto } from './dto/get-user-by-id.dto'
import { UpdateUserBodyDto, UpdateUserResponseDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
  public constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}

  public async createUser(body: CreateUserBodyDto): Promise<CreateUserResponseDto> {
    const user = await this.usersRepository.save(body)
    return user
  }

  public async getUserById(id: string): Promise<GetUserByIdResponseDto> {
    const user = await this.usersRepository.findOne({ where: { id } })
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found!`)
    }
    return user
  }

  public async updateUser(id: string, body: UpdateUserBodyDto): Promise<UpdateUserResponseDto> {
    return this.usersRepository.save({ id, ...body })
  }
}
