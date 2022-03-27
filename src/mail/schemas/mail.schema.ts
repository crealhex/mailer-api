import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

@Schema()
export class Mail extends Document {
  @Prop({ type: Types.ObjectId, ref: User.name, required: true })
  from: User | Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: User.name, required: true })
  to: User | Types.ObjectId;

  @Prop({ required: true })
  subject: string;

  @Prop({ required: true })
  content: string;

  @Prop({ type: Types.ObjectId, ref: User.name, required: true })
  status: User | Types.ObjectId;
}

export const MailSchema = SchemaFactory.createForClass(Mail);
