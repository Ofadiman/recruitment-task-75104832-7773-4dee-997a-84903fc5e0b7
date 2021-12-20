import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserBodyDto, CreateUserResponseDto } from './dto/create-user.dto'

@Controller('users')
export class UsersController {
  public constructor(private readonly usersService: UsersService) {}

  @Post()
  public async createUser(@Body() body: CreateUserBodyDto): Promise<CreateUserResponseDto> {
    return this.usersService.createUser(body)
  }

  @Get(`:userId`)
  public async getUser(): Promise<unknown> {
    // TODO: Implement route.
    return
  }

  @Patch(`:userId`)
  public async updateUser(): Promise<unknown> {
    // TODO: Implement route.
    return
  }

  @Delete(`:userId`)
  public async deleteUser(): Promise<unknown> {
    // TODO: Implement route.
    return
  }

  @Get()
  public async paginate(): Promise<unknown> {
    // TODO: Implement route.
    return
  }
}
