import { MAXIMUM_FIRST_NAME_LENGTH, MAXIMUM_LAST_NAME_LENGTH } from '../user.entity'
import { IsEmail, IsString, MaxLength } from 'class-validator'

export class CreateUserBodyDto {
  @IsEmail()
  public email: string

  @IsString()
  @MaxLength(MAXIMUM_FIRST_NAME_LENGTH)
  public firstName: string

  @IsString()
  @MaxLength(MAXIMUM_LAST_NAME_LENGTH)
  public lastName: string
}

export class CreateUserResponseDto {
  public email: string
  public firstName: string
  public id: string
  public lastName: string
}
