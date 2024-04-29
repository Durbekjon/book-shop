import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthRepository {
  constructor(private prismaService: PrismaService) {}

  async createUser(data: RegisterDto) {
    return this.prismaService.user.create({ data });
  }

  async findByEmail(email: string) {
    return this.prismaService.user.findUnique({ where: { email: email } });
  }
}
