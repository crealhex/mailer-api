import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  // set attributes here below but use @Prop() decorator. The properties are: email, password, firstName, lastName, birthDate, status. Don't comment anything.
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, select: false })
  password: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, select: false })
  birthDate: Date;

  // Status property with raw decorator.
  @Prop(
    raw({
      code: { type: Number, required: true },
      name: { type: String, required: true },
    }),
  )
  status: Record<string, any>;
}

// Now export the User class as Schema with SchemaFactory
export const UserSchema = SchemaFactory.createForClass(User);
