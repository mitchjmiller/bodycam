import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { pbkdf2Sync, randomBytes } from 'crypto';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';

@Schema({ versionKey: false })
export class User {
  @Prop()
    id: string;

  @Prop()
    firstName: string;

  @Prop()
    lastName: string;

  @Prop()
    email: string;

  @Prop({ select: false })
    salt: string;

  @Prop({ select: false })
    hash: string;

  // eslint-disable-next-line @typescript-eslint/ban-types
  public generateId: Function;

  // eslint-disable-next-line @typescript-eslint/ban-types
  public setPassword: Function;

  // eslint-disable-next-line @typescript-eslint/ban-types
  public verifyPassword: Function;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.methods.generateId = function () {
  this.id = uuid();
};

UserSchema.methods.setPassword = function (password: string) {
  this.salt = randomBytes(16).toString('hex');
  this.hash = pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.verifyPassword = function (password: string) {
  return this.hash === pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};