import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreateUserDTO } from '../dtos/user.dto';

import { User } from '../schemas/user.schema';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  async getAll(): Promise<User[]> {
    return await this.userService.getAll();
  }

  // Write the @Post() method to create a new user
  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  async create(@Body() user: CreateUserDTO): Promise<User> {
    return await this.userService.create(user);
  }
}
