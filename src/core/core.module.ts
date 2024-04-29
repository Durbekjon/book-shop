import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { AT_EXPIRES, AT_SECRET } from 'constants/jwt';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: AT_SECRET,
      signOptions: {
        expiresIn: AT_EXPIRES,
      },
    }),
  ],
  exports: [PrismaModule, JwtModule],
})
export class CoreModule {}
