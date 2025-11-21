import { AppConfigModule } from 'src/config/app-config.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [AppConfigModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
