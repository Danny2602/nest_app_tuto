import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';
import path from 'path';

@Module({
  controllers: [ExampleController],
  providers: [ExampleService]
})
export class ExampleModule implements NestModule{// implementar NestModule para usar middleware
  configure(consumer: MiddlewareConsumer) {// el metodo configure recibe el consumer para configurar el middleware
    consumer.apply(LoggerMiddleware).forRoutes(// aplicar el middleware LoggerMiddleware
      {path:'/user',method:RequestMethod.GET}

    ).apply(AuthMiddleware).forRoutes(// aplicar el middleware AuthMiddleware
      {path:'/user',method:RequestMethod.GET}
    )
    // configurar el middleware aqui si es necesario
  }
}
