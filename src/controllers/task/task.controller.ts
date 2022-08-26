/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Post, Put, Body, Param } from '@nestjs/common';
import { TaskCreateDto } from 'src/dto/task-create.dto';
import { Task } from 'src/schemas/task/task.schema';
import { TaskService } from 'src/services/task/task.service';

@Controller('task')
export class TaskController {
  private readonly taskService:TaskService;
  constructor(task:TaskService)
  {
    this.taskService = task;
  }

  @Get()
  getTasks(): Promise<Array<Task>> 
  {
    return this.taskService.getAllTask();
  }

  @Get(":id")
  getTasksById(@Param("id") id): Promise<Task>  {
    return this.taskService.getTaskById(id);
  }

  @Post()
  createTask(@Body() task:TaskCreateDto): Promise<Task> {
    return this.taskService.createNewtask(task);
  }

  @Put(":id")
  updateTask(@Body() task:TaskCreateDto, @Param("id") id):string
  {
    return `tarea actualizada ${task} con id ${id}`;
  }

  @Delete(":id")
  deleteTask(@Param("id") id):string
  {

    return `borrando tarea ${id}`;
  }
}
