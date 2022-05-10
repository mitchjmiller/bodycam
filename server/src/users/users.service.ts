import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { User, UserDocument } from 'src/users/user.schema';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findUsers(query: FilterQuery<User> = {}): Promise<User[]> {
    return this.userModel.find(query, { _id: false });
  }

  async findUser(id: string): Promise<UserDocument> {
    const query: FilterQuery<User> = { id };
    const user = await this.userModel.findOne(query, { _id: false });

    if (!user)
      throw new NotFoundException('User not found');

    return user;
  }

  async createUser(userDto: CreateUserDto): Promise<UserDocument> {
    const { email, password } = userDto;

    const existingUsers = await this.findUsers({ email });
    if (existingUsers.length)
      throw new ConflictException('User already exists');

    const user = new this.userModel(userDto);
    user.generateId();
    user.setPassword(password);
    return user.save();
  }
}
