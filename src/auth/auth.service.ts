import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { SALT } from 'constants/jwt';
import { LoginRepsonseDto, UserAuthResponseDto } from './dto/auth-response.dto';
import { AuthJwtService } from './auth-jwt.service';
import { LoginDto } from './dto/login.dto';
@Injectable()
export class AuthService {
  constructor(
    private authRepository: AuthRepository,
    private authJwtService: AuthJwtService,
  ) {}

  async register(data: RegisterDto): Promise<UserAuthResponseDto> {
    data.password = await bcrypt.hash(data.password, SALT);

    const existUser = await this.authRepository.findByEmail(data.email);

    if (existUser) {
      throw new HttpException('User allready exist', HttpStatus.FORBIDDEN);
    }

    const user = await this.authRepository.createUser(data);

    const tokens = this.authJwtService.createTokens(user.id);

    return tokens;
  }

  async login(data: LoginDto): Promise<LoginRepsonseDto> {
    const user = await this.authRepository.findByEmail(data.email);

    if (!user) {
      throw new HttpException(
        'User with this email not found',
        HttpStatus.NOT_FOUND,
      );
    }

    const isPasswordCorrect = await bcrypt.compare(
      data.password,
      user.password,
    );

    if (!isPasswordCorrect) {
      throw new HttpException('Password is not correct', HttpStatus.FORBIDDEN);
    }

    const tokens = await this.authJwtService.createTokens(user.id);

    return { user, ...tokens };
  }
}
