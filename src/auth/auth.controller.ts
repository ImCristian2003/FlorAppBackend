import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDTO } from './dto/register-user.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register') // http://localhost:3000/auth/register -> POST
  register(@Body() user: RegisterUserDTO) {
    return this.authService.register(user);
  }

  @Post('login') // http://localhost:3000/auth/login -> POST
  login(@Body() loginData: LoginAuthDto) {
    return this.authService.login(loginData);
  }
}
