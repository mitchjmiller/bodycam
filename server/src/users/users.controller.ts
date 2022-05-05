import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  async findAll() {

  }

  @Get(':id')
  async findOne(@Param('id') id: string) {

  }

  @Post()
  async create() {

  }
}
