import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from '../dtos/user.dto';

import { User } from '../schemas/user.schema';

@Injectable()
export class UserService {
  // Write the constructor with @Inject for User.name model as private
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  // Write the method to get all users
  async getAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  // Write the method to create a new user
  async create(user: CreateUserDTO): Promise<User> {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }
}
