import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ description: 'User email' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'User password', minLength: 6 })
  @IsNotEmpty()
  @IsString()
  @MinLength(6, { message: 'Password is too short' })
  password: string;
}
