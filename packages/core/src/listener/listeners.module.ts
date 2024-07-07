import {Module, OnApplicationBootstrap, OnModuleInit} from '@nestjs/common';
import { Telegraf } from 'telegraf';

@Module({
  imports: []
})
export class ListenersModule implements OnModuleInit, OnApplicationBootstrap {
  constructor(
    private readonly client: Telegraf,
  ) {}

  onModuleInit() {
    // console.log(this.client.on())
    // throw new Error('Method not implemented.');
  }
  onApplicationBootstrap() {
    // throw new Error('Method not implemented.');
  }
}