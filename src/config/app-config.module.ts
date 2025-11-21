import { Module } from '@nestjs/common';
import { AppConfigService } from './app-config.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
