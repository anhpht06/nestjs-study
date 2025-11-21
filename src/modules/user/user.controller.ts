/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';

@Controller('tuanfds')
export class UserController {
  constructor() {}

  @Get()
  getName(): string {
    return 'tuan';
  }
}
