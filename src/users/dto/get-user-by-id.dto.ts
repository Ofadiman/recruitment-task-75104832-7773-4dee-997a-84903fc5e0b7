import { PickType } from '@nestjs/swagger'
import { User } from '../user.entity'

export class GetUserByIdParamsDto extends PickType(User, [`id`]) {}

export class GetUserByIdResponseDto extends PickType(User, [`firstName`, `email`, `lastName`, `id`]) {}
