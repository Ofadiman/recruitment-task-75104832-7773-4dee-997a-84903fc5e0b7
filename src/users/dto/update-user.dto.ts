import { MAXIMUM_FIRST_NAME_LENGTH, MAXIMUM_LAST_NAME_LENGTH } from '../user.entity'
import { IsEmail, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator'

export class UpdateUserBodyDto {
  @IsEmail()
  @IsOptional()
  public email: string

  @IsString()
  @MaxLength(MAXIMUM_FIRST_NAME_LENGTH)
  @IsOptional()
  public firstName: string

  @IsString()
  @MaxLength(MAXIMUM_LAST_NAME_LENGTH)
  @IsOptional()
  public lastName: string
}

export class UpdateUserResponseDto {
  public email: string
  public firstName: string
  public id: string
  public lastName: string
}

export class UpdateUserParamsDto {
  @IsUUID()
  public userId: string
}
