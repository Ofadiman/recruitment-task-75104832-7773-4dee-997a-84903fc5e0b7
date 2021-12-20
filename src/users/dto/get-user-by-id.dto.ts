import { IsUUID } from 'class-validator'

export class GetUserByIdParamsDto {
  @IsUUID()
  public userId: string
}

export class GetUserByIdResponseDto {
  public email: string
  public firstName: string
  public id: string
  public lastName: string
}
