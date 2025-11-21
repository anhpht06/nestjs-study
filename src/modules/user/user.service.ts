import { Injectable } from '@nestjs/common';
import { ResponseBase } from 'src/common/dto/response-base.dto';
import { CreateUserDto, CreateUserResponse } from './dto/create-user.dto';

@Injectable()
export class UserService {
  createUser(createUserDto: CreateUserDto): ResponseBase<CreateUserResponse> {
    const { username, password } = createUserDto;
    return {
      status: 201,
      message: 'Tạo user thành công',
      data: {
        username: username,
      },
    };
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #id user`;
  }

  remove(id: number) {
    return `This action removes a #id user`;
  }
}
