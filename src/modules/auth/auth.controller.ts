/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CONTROLLER_PREFIX } from 'src/common/constant';
import { SignInDto, SignInResponse } from './dto/sign-in.dto';
import { ResponseBase } from 'src/common/dto/response-base.dto';
import { ApiResponse, PartialType } from '@nestjs/swagger';
import { buildResponseDto } from 'src/common/dto/build-response-dto.factory';

@Controller(CONTROLLER_PREFIX.AUTH)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiResponse({
    status: 200,
    type: PartialType(buildResponseDto(SignInResponse)),
    description: 'Sign in',
  })
  @HttpCode(200)
  @Post('sign-in')
  signIn(@Body() signInDto: SignInDto): ResponseBase<SignInResponse> {
    return this.authService.signIn(signInDto);
  }
}
