import { Module, ValidationPipe } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DatabaseModule } from './database/database.module'
import { UsersModule } from './users/users.module'
import { APP_PIPE } from '@nestjs/core'
import { RedisModule } from '@liaoliaots/nestjs-redis'

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    RedisModule.forRoot({
      closeClient: true,
      config: {
        host: 'recruitment-task-75104832-7773-4dee-997a-84903fc5e0b7-redis',
        port: 6379
      }
    })
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        forbidNonWhitelisted: true,
        forbidUnknownValues: true,
        transform: true,
        validationError: {
          target: false,
          value: true
        }
      })
    }
  ]
})
export class AppModule {}
