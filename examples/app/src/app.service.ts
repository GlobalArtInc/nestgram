import { Injectable } from '@nestjs/common';
import { CommandContext, Context, ContextOf } from '../../../packages/core/src/context';
import { Telegraf } from 'telegraf';
import { TextCommand } from '../../../packages/core';

@Injectable()
export class AppService {
  constructor(private readonly client: Telegraf) {

  }
  getHello(): string {
    return 'Hello World!';
  }

  @TextCommand({
    name: 'start',
    description: 'Displays this help message.',
  })
  onStart(@Context() [ctx]: CommandContext) {
    ctx.reply('Start message triggered');
  }
}
