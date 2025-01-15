import { prisma } from '@/lib/prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async getAllUsers() {
    const users = await prisma.user.findMany();
    return users;
  }
}
