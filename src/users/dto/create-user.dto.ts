import { PickType } from '@nestjs/swagger'
import { User } from '../user.entity'

export class CreateUserBodyDto extends PickType(User, [`firstName`, `email`, `lastName`]) {}

export class CreateUserResponseDto extends PickType(User, [`firstName`, `email`, `lastName`, `id`]) {}
