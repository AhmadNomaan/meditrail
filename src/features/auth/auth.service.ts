import { Injectable } from '@nestjs/common';
import { UserSignUpDto, UpdateAuthDto } from './auth.dto';

@Injectable()
export class AuthService {
  create(createAuthDto: UserSignUpDto) {
    return createAuthDto;
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
