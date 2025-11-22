import { Module } from '@nestjs/common';
import { AppointmentModule } from './modules/appointment/appointment.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ExampleModule } from './modules/example/example.module';
import { UsersModule } from './modules/users/users.module';


@Module({
  imports: [AppointmentModule, ExampleModule, UsersModule],
  
  
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
