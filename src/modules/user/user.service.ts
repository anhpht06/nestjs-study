import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ResponseBase } from 'src/common/dto/response-base.dto';
import { CreateUserDto, CreateUserResponse } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}
  async createUser(
    createUserDto: CreateUserDto,
  ): Promise<ResponseBase<CreateUserResponse>> {
    const { username, password } = createUserDto;
    try {
      const user = this.userRepo.create({
        username: username,
        password: password,
      });
      await this.userRepo.save(user);
      return {
        status: 201,
        message: 'Tạo user thành công',
        data: user,
      };
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async getAllUser(): Promise<ResponseBase<UserDto[]>> {
    try {
      const user = await this.userRepo.find();

      return {
        status: 200,
        message: 'Lay thong tin thanh cong',
        data: user,
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  findOne(id: number) {
    return `This action returns a #id user`;
  }

  remove(id: number) {
    return `This action removes a #id user`;
  }
}
