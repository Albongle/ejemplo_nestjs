/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './controllers/task/task.controller';
import { TaskModule } from './modules/task/task.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [TaskModule, MongooseModule.forRoot("mongodb://localhost/pruebaNest")],
  controllers: [AppController, TaskController],
  providers: [AppService],
  
})
export class AppModule {}
