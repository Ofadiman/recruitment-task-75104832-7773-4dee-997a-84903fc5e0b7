import { IsUUID } from 'class-validator'

export class DeleteUserParamsDto {
  @IsUUID()
  public userId: string
}
