/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto, CreateUserResponse } from './dto/create-user.dto';
import { ResponseBase } from 'src/common/dto/response-base.dto';
import { ApiResponse, PartialType } from '@nestjs/swagger';
import { createResponseDto } from 'src/common/dto/build-response-dto.factory';
import { UserService } from './user.service';

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
  ): ResponseBase<CreateUserResponse> {
    return this.userService.createUser(createUserDto);
  }
}
