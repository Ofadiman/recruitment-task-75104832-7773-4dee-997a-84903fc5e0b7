import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

export const MAXIMUM_FIRST_NAME_LENGTH = 50
export const MAXIMUM_LAST_NAME_LENGTH = 50

@Entity({ name: `users` })
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column()
  public email: string

  @Column({ length: MAXIMUM_FIRST_NAME_LENGTH })
  public firstName: string

  @Column({ length: MAXIMUM_LAST_NAME_LENGTH })
  public lastName: string
}
