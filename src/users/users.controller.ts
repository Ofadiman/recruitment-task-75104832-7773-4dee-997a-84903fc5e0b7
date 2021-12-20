import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  OnModuleInit,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query
} from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserBodyDto, CreateUserResponseDto } from './dto/create-user.dto'
import { GetUserByIdParamsDto, GetUserByIdResponseDto } from './dto/get-user-by-id.dto'
import { UpdateUserBodyDto, UpdateUserParamsDto, UpdateUserResponseDto } from './dto/update-user.dto'
import { DeleteUserParamsDto } from './dto/delete-user.dto'
import { InjectRedis } from '@liaoliaots/nestjs-redis'
import { Redis } from 'ioredis'

const CREATE_USER_CHANNEL = `CREATE_USER_CHANNEL`

@Controller('users')
export class UsersController implements OnModuleInit {
  public constructor(private readonly usersService: UsersService, @InjectRedis() private readonly redis: Redis) {}

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
  public async paginate(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10
  ): Promise<unknown> {
    return this.usersService.paginate({
      page,
      limit
    })
  }

  @Post('publish-user')
  public async publishUser(@Body() body: CreateUserBodyDto) {
    const publisher = this.redis.duplicate()
    await publisher.publish(CREATE_USER_CHANNEL, JSON.stringify(body))
  }

  async onModuleInit() {
    const subscriber = this.redis.duplicate()
    subscriber.subscribe(CREATE_USER_CHANNEL, (err, count) => {
      if (err) {
        console.error('Failed to subscribe: %s', err.message)
      } else {
        console.log(`Subscribed successfully! This client is currently subscribed to ${count} channels.`)
      }
    })

    subscriber.on('message', async (channel, message) => {
      console.info(`Received ${message} from ${channel}`)
      if (channel === CREATE_USER_CHANNEL) {
        try {
          await this.usersService.createUser(JSON.parse(message))
        } catch (error) {
          console.error(error)
        }
      }
    })
  }
}
