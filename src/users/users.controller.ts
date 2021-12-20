import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserBodyDto, CreateUserResponseDto } from './dto/create-user.dto'
import { GetUserByIdParamsDto, GetUserByIdResponseDto } from './dto/get-user-by-id.dto'
import { UpdateUserBodyDto, UpdateUserParamsDto, UpdateUserResponseDto } from './dto/update-user.dto'
import { DeleteUserParamsDto } from './dto/delete-user.dto'

@Controller('users')
export class UsersController {
  public constructor(private readonly usersService: UsersService) {}

  @Post()
  public async createUser(@Body() body: CreateUserBodyDto): Promise<CreateUserResponseDto> {
    return this.usersService.createUser(body)
  }

  @Get(`:userId`)
  public async getUserById(@Param() params: GetUserByIdParamsDto): Promise<GetUserByIdResponseDto> {
    return this.usersService.getUserById(params.userId)
  }

  @Patch(`:userId`)
  public async updateUser(
    @Body() body: UpdateUserBodyDto,
    @Param() params: UpdateUserParamsDto
  ): Promise<UpdateUserResponseDto> {
    return this.usersService.updateUser(params.userId, body)
  }

  @Delete(`:userId`)
  public async deleteUser(@Param() params: DeleteUserParamsDto): Promise<void> {
    return this.usersService.deleteUser(params.userId)
  }

  @Get()
  public async paginate(): Promise<unknown> {
    // TODO: Implement route.
    return
  }
}
