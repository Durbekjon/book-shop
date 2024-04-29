import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthJwtService } from './auth-jwt.service';
import { AuthRepository } from './auth.repository';
import { CoreModule } from 'src/core/core.module';
import { AuthService } from './auth.service';

@Module({
  imports: [CoreModule],
  controllers: [AuthController],
  providers: [AuthService, AuthJwtService, AuthRepository],
})
export class AuthModule {}
