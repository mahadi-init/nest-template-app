import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  calculateData(val1: number, val2: number) {
    return val1 + val2;
  }
}
