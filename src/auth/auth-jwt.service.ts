import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RT_EXPIRES, RT_SECRET } from 'constants/jwt';

@Injectable()
export class AuthJwtService {
  constructor(private readonly jwtService: JwtService) {}

  async createTokens(userId: string) {
    const access_token = await this.createAccessToken(userId);
    const refresh_token = await this.createRefreshToken(userId);
    return {
      access_token,
      refresh_token,
    };
  }

  private async createAccessToken(userId: string) {
    const accessToken = await this.jwtService.signAsync({ id: userId });

    return accessToken;
  }

  private async createRefreshToken(userId: string) {
    const expiresIn = RT_EXPIRES;

    const refreshToken = await this.jwtService.signAsync(
      {
        id: userId,
      },
      {
        secret: RT_SECRET,
        expiresIn,
      },
    );

    return refreshToken;
  }
}
