import { Body, Controller, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { CreateUserDto, CreateUserReponseDto, UserDto } from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @Get()
  async findAll(): Promise<UserDto[]> {
    const users = await this.usersService.findUsers();
    return users.map((user) => new UserDto(user));
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<UserDto> {
    const user = this.usersService.findUser(id);
    return new UserDto(user);
  }

  @Post()
  async create(@Body() userDto: CreateUserDto): Promise<UserDto> {
    const user = await this.usersService.createUser(userDto);
    return new CreateUserReponseDto(user.toObject());
  }
}
