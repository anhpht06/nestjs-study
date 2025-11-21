import { Injectable } from '@nestjs/common';
import { SignInDto, SignInResponse } from './dto/sign-in.dto';
import { ResponseBase } from 'src/common/dto/response-base.dto';
import { AppConfigService } from 'src/config/app-config.service';

@Injectable()
export class AuthService {
  constructor(private readonly appConfig: AppConfigService) {}
  signIn(signInDto: SignInDto): ResponseBase<SignInResponse> {
    const { username, password } = signInDto;

    console.log({ username, password });
    return {
      status: 200,
      message: 'success',
      data: {
        accessToken: String(this.appConfig.synchronize),
      },
    };
  }
}
