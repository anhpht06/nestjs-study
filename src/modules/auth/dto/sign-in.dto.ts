import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @ApiProperty({ name: 'username' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ name: 'password' })
  @IsNotEmpty()
  password: string;
}

export class SignInResponse {
  @ApiProperty({ name: 'accessToken' })
  accessToken: string;
}

// export class PartialSignInResponse extends PartialType(SignInResponse) {}
