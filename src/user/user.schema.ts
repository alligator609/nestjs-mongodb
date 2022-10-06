import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Factory } from '@rancid/nestjs-seeder';

import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Factory(faker =>faker.name.fullName())
  @Prop({ required: true })
  name: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop({ required: true, unique: true })
  phone: string;
  @Prop({ required: true })
  userType: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
