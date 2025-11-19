import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import chalk from 'chalk';

async function bootstrap() {
  const port = process.env.PORT ?? 3000;
  const globalPrefix = 'api/v1';
  const globalSwaggerPrefix = 'api/docs';
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(globalPrefix);

  // Swagger config
  const config = new DocumentBuilder()
    .setTitle('NestJS Study API')
    .setDescription('The API documentation for NestJS study project')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(globalSwaggerPrefix, app, document);

  await app.listen(port);

  console.log(
    chalk.blue('🔗 API: ') +
      chalk.bold(`http://localhost:3000/${globalPrefix}`),
  );
  console.log(
    chalk.blue('📚 Swagger: ') +
      chalk.bold(`http://localhost:3000/${globalSwaggerPrefix}`),
  );
}
bootstrap();
