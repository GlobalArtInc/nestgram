import { Injectable } from '@nestjs/common';
import { On } from '../../../packages/core';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  @On('message')
  onReady() {
    console.log(2);
  }
}
