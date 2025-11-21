import { SignInDto } from 'src/modules/auth/dto/sign-in.dto';
import { User } from './user.dto';

export class CreateUserDto extends SignInDto {}

export class CreateUserResponse extends User {}
