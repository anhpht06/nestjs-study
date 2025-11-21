/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto, CreateUserResponse } from './dto/create-user.dto';
import { ResponseBase } from 'src/common/dto/response-base.dto';
import { ApiResponse, PartialType } from '@nestjs/swagger';
import { createResponseDto } from 'src/common/dto/build-response-dto.factory';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiResponse({
    status: 201,
    type: createResponseDto(CreateUserResponse),
    description: 'Create User',
  })
  @Post('create')
  create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<ResponseBase<CreateUserResponse>> {
    return this.userService.createUser(createUserDto);
  }

  @ApiResponse({
    status: 200,
    type: createResponseDto(UserDto, { isArray: true }),
    description: 'Get All User',
  })
  @Get('get-all-user')
  async getAllUser(): Promise<ResponseBase<UserDto[]>> {
    return await this.userService.getAllUser();
  }
}
