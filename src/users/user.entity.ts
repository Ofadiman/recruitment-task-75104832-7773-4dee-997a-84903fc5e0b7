import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IsEmail, IsString, IsUUID, MaxLength } from 'class-validator'

export const MAXIMUM_FIRST_NAME_LENGTH = 50
export const MAXIMUM_LAST_NAME_LENGTH = 50

@Entity({ name: `users` })
export class User {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  public id: string

  @Column()
  @IsEmail()
  public email: string

  @Column({ length: MAXIMUM_FIRST_NAME_LENGTH })
  @IsString()
  @MaxLength(MAXIMUM_FIRST_NAME_LENGTH)
  public firstName: string

  @Column({ length: MAXIMUM_LAST_NAME_LENGTH })
  @IsString()
  @MaxLength(MAXIMUM_LAST_NAME_LENGTH)
  public lastName: string
}
