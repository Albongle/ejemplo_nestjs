import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

/* eslint-disable prettier/prettier */

export type TaskDocument = Task;

@Schema()
export class Task extends Document{
    @Prop()
    name:string;
    @Prop()
    description:string

}

export const TaskSchema = SchemaFactory.createForClass(Task);