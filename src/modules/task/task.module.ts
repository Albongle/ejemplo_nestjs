/* eslint-disable prettier/prettier */
import { TaskService } from 'src/services/task/task.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskController } from 'src/controllers/task/task.controller';
import { Task, TaskSchema } from 'src/schemas/task/task.schema';


@Module({
    imports:[MongooseModule.forFeature([{name:Task.name,schema:TaskSchema}])],
    controllers:[TaskController],
    providers:[TaskService],
    exports:[TaskService],
})
export class TaskModule {}
