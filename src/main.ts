import { NestFactory, Reflector } from '@nestjs/core';
import './loadenv';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import chalk from 'chalk';
import {
  GLOBAL_API_PREFIX,
  GLOBAL_SWAGGER_PREFIX,
  SWAGGER_DESC,
  SWAGGER_VERSION,
} from './common/constant';
import { ConfigService } from '@nestjs/config';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('app.port') ?? 3000;

  app.setGlobalPrefix(GLOBAL_API_PREFIX);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  // Swagger config
  const config = new DocumentBuilder()
    .setDescription(SWAGGER_DESC)
    .setVersion(SWAGGER_VERSION)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(GLOBAL_SWAGGER_PREFIX, app, document);

  await app.listen(port);

  console.log(
    chalk.blue('🔗 API: ') +
      chalk.bold(`http://localhost:${port}/${GLOBAL_API_PREFIX}`),
  );
  console.log(
    chalk.blue('📚 Swagger: ') +
      chalk.bold(`http://localhost:${port}/${GLOBAL_SWAGGER_PREFIX}`),
  );
}
void bootstrap();
