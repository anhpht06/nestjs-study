import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import path from 'path';
import { AppConfigModule } from './config/app-config.module';
import { NODE_ENV } from './common/enum/env.enum';
import { AppConfigService } from './config/app-config.service';
import proConfig from './config/pro.config';
import devConfig from './config/dev.config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        process.env.NODE_ENV === NODE_ENV.production ? proConfig : devConfig,
      ],
    }),

    AppConfigModule,

    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule],
      inject: [AppConfigService],
      useFactory: (appConfigService: AppConfigService) => ({
        type: 'postgres',
        host: appConfigService.dbHost,
        port: appConfigService.dbPort,
        username: appConfigService.dbUser,
        password: appConfigService.dbPass,
        database: appConfigService.dbName,
        entities: [path.join(__dirname, '/**/*.entity{.ts,.js}')],
        synchronize: appConfigService.synchronize,
        autoLoadEntities: true,
      }),
    }),

    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
