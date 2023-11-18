import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SignInQueryOptions, UpdateAuthDto, UserSignInDto, UserSignUpDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('patient-signup')
  async patientSignUp(@Body() dto: UserSignUpDto) {
    return this.authService.patientSignUp(dto);
  }

  @Post('signin')
  async patientSignIn(@Body() dto: UserSignInDto, @Query('type') type: SignInQueryOptions) {
    return await this.authService.signIn(dto, type.sign_in_type); 
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
