import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Tag } from '../enums/tag.enum';

@Schema()
export class Excuse extends Document {
  @Prop({ required: true, unique: true })
  http_code: number;

  @Prop({ required: true })
  tag: Tag;

  @Prop({ required: true, unique: true })
  message: string;
}

export const ExcuseSchema = SchemaFactory.createForClass(Excuse);
