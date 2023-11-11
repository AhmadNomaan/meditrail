import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './users.dto';
import { PrismaClient } from '.prisma/client';


@Injectable()
export class UsersService {

  constructor(private readonly dbClient: PrismaClient ){}

  async create(createUserDto: CreateUserDto) {
    return await this.dbClient.user.create({
      data: {
        firstname: 'devuser', 
        lastname: 'one', 
        dob: new Date('11-11-2023'), 
        email: 'devuser@mailinator.com',
        type: 'patient'
      }
    })
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
