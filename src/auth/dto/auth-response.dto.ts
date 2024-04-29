import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({ description: "User's id" })
  id: string;
  @ApiProperty({ description: "User's email" })
  email: string;
  @ApiProperty({ description: "User's role" })
  role: string;
}

export class LoginRepsonseDto {
  @ApiProperty({ description: 'User', type: User })
  user: User;
  @ApiProperty({ description: "User's access token" })
  access_token: string;

  @ApiProperty({ description: "User's refresh token" })
  refresh_token: string;
}

export class UserAuthResponseDto {
  @ApiProperty({ description: "User's access token" })
  access_token: string;

  @ApiProperty({ description: "User's refresh token" })
  refresh_token: string;
}
