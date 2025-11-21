import { SignInDto } from 'src/modules/auth/dto/sign-in.dto';
import { UserDto } from './user.dto';

export class CreateUserDto extends SignInDto {}

export class CreateUserResponse extends UserDto {}
