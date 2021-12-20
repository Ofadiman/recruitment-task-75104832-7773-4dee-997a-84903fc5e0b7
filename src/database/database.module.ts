import { Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: (): TypeOrmModuleOptions => {
        const cwd: string = process.cwd()

        // TODO: Move configuration to Config Service from @nestjs/config when time is left.
        return {
          autoLoadEntities: true,
          cli: {
            migrationsDir: `${cwd}/src/database/migrations`
          },
          database: `postgres`,
          entities: [`${cwd}/dist/**/*.entity.js`],
          host: `recruitment-task-75104832-7773-4dee-997a-84903fc5e0b7-database`,
          keepConnectionAlive: true,
          logging: [`error`, `query`],
          migrations: [`${cwd}/dist/src/database/migrations/*.js`],
          migrationsRun: true,
          password: `postgres`,
          port: 5432,
          subscribers: [`${cwd}/dist/**/*.subscriber.js`],
          synchronize: false,
          type: `postgres`,
          username: `postgres`
        }
      }
    })
  ]
})
export class DatabaseModule {}
