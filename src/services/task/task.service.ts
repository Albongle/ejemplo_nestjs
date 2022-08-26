import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TaskCreateDto } from 'src/dto/task-create.dto';
import { Task, TaskDocument } from 'src/schemas/task/task.schema';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}
  getAllTask(): Promise<Array<Task>> {
    return this.taskModel.find().exec();
  }
  getTaskById(id: string): Promise<Task> {
    return this.taskModel.findById(id).exec();
  }
  createNewtask(task: TaskCreateDto): Promise<Task> {
    const createTask = new this.taskModel(task);
    return createTask.save();
  }
}
