import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { UserSignUpDto, UpdateAuthDto, UserSignInDto } from './auth.dto';
import { PrismaClient } from '@prisma/client';
import * as argon from 'argon2'
import { TimeStamp, UserType } from 'src/common/constants';
import { PrismaService } from 'src/common/database/prisma/prisma.service';
import { UserEntity } from '../users/users.entity';

@Injectable()
export class AuthService {

  constructor(private readonly prismaService: PrismaService) { }

  async patientSignUp(dto: UserSignUpDto) {
    const { email, password, firstname, lastname, dob, phone_no } = dto
    const userExists = await this.prismaService.user.findFirst({
      where: {
        email: dto.email
      }
    })

    if (userExists) throw new ForbiddenException('Email already signed up!')

    const hashedPassword = await argon.hash(password)

    return await this.prismaService.user.create({
      data: {
        email: email,
        password: hashedPassword,
        type: UserType.PATIENT,
        created_at: TimeStamp(),
        updated_at: TimeStamp(),
        patient: {
          create: {
            firstname: firstname,
            lastname: lastname,
            dob: dob,
            phone_no: phone_no
          }
        }
      }
    })

  }

  async signIn(dto: UserSignInDto, type: UserType) {
    const user: UserEntity = await this.prismaService.user.findFirst({
      where: {
        email: dto.email, 
        type: type
      } 
    })

    if(!user) throw new BadRequestException('Email not found!')

    const passwordVerified = argon.verify(user.password, dto.password)

    if(!passwordVerified) throw new BadRequestException('Invalid password!')

    const accessToken = this.generateToken(user)
    

    return dto
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



  async generateToken(user: UserEntity) {

  }
}
