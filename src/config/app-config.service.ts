import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ENV_KEY, NODE_ENV } from 'src/common/enum/env.enum';

@Injectable()
export class AppConfigService {
  constructor(private readonly config: ConfigService) {}

  get isProduction(): boolean {
    return this.config.get<NODE_ENV>(ENV_KEY.NODE_ENV) === NODE_ENV.production;
  }

  get appPort(): number {
    return Number(this.config.get<string>(ENV_KEY.APP_PORT, '1234'));
  }

  get dbHost(): string {
    return this.config.get<string>(ENV_KEY.DB_HOST, 'localhost');
  }

  get dbPort(): number {
    return Number(this.config.get<string>(ENV_KEY.DB_PORT, '5432'));
  }

  get dbUser(): string {
    return this.config.get<string>(ENV_KEY.DB_USER, 'postgres');
  }

  get dbPass(): string {
    return this.config.get<string>(ENV_KEY.DB_PASS, '');
  }

  get dbName(): string {
    return this.config.get<string>(ENV_KEY.DB_NAME, '');
  }

  get synchronize(): boolean {
    return this.config.get<boolean>(ENV_KEY.DB_SYNCHRONIZE, false);
  }
}
