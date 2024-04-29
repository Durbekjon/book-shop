import { Body, Controller, Post, Version } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LoginRepsonseDto, UserAuthResponseDto } from './dto/auth-response.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Register user' })
  @ApiBearerAuth('access-token')
  @ApiResponse({
    type: () => UserAuthResponseDto,
  })
  @Version('1')
  @Post('register')
  register(@Body() body: RegisterDto): Promise<UserAuthResponseDto> {
    return this.authService.register(body);
  }

  @ApiOperation({ summary: 'Login user' })
  @ApiBearerAuth('access-token')
  @ApiResponse({
    type: () => LoginRepsonseDto,
  })
  @Version('1')
  @Post('login')
  login(@Body() body: LoginDto): Promise<LoginRepsonseDto> {
    return this.authService.login(body);
  }
}
