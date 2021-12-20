import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserBodyDto, CreateUserResponseDto } from './dto/create-user.dto'
import { GetUserByIdParamsDto, GetUserByIdResponseDto } from './dto/get-user-by-id.dto'

@Controller('users')
export class UsersController {
  public constructor(private readonly usersService: UsersService) {}

  @Post()
  public async createUser(@Body() body: CreateUserBodyDto): Promise<CreateUserResponseDto> {
    return this.usersService.createUser(body)
  }

  @Get(`:id`)
  public async getUser(@Param() params: GetUserByIdParamsDto): Promise<GetUserByIdResponseDto> {
    console.log(`params`)
    console.log(JSON.stringify(params, null, 2))
    return this.usersService.getUserById(params.id)
  }

  @Patch(`:id`)
  public async updateUser(): Promise<unknown> {
    // TODO: Implement route.
    return
  }

  @Delete(`:id`)
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
